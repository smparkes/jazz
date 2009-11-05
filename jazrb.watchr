#!/usr/bin/env watchr

begin; require 'watchr/event_handlers/em'; rescue LoadError; end

watch( %r(.*), :modified, lambda { |md| File.directory? md[0] } ) do |md|
  raise Watchr::Refresh
end

watch( %r(jazrb.watchr), :modified ) do |md|
  raise Watchr::Refresh
end

watch( %r(^((public|spec)/.*)\.haml$), [ :created, :modified ] ) do |md|
  # FIX: check mtime diffs on load
  # FIX: sign html with hash and don't overwrite/delete on bad hash
  # FIX: support deleted and remove html file
  cmd = "rm -f #{md[1]}.html && haml -f html5 #{md[0]} #{md[1]}.html && chmod 444 #{md[1]}.html"
  puts cmd
  system cmd
  if  $?.signaled? && $?.termsig == 2
    Process.kill 2, 0
  end
end

map_to_test = lambda do |file, event|
  case file
  when %r(spec/(.*)([Ss]pec)\.js$)
    # Run JS spec's using parallel HTML file if it exists
    prefix = $~[1];
    prefix.sub! %r(_$), ""
    files = Dir[prefix+".*htm*"]
    if html = files.detect { |f| f =~ %r(\.x?html?$) }
      event == :load ? nil : html
    else 
      file
    end
  else; file
  end
end

jazrb = lambda do |*args|
  files = []
  # boy, clean this up, but call/splat are subtle
  if Array === args[0]
    args = args[0][0]
    files = args.map { |pair| map_to_test.call( pair[0][0], pair[1] ) }
    files.compact!
    files.uniq!
  else
    (file, event) = *args
    file = map_to_test.call file, event
    if file
      files = [ file ]
    end
  end
  if !files.empty?
    cmd = "jazrb #{files.join(" ")}"
    puts cmd
    system cmd
    puts "exit status: #{$?.exitstatus}" if $?.exited? && $?.exitstatus != 0
    if  $?.signaled? && $?.termsig == 2
      Process.kill 2, 0
    end
  end
end

watch( %r(^(spec/.*[Ss]pec)\.js$), [ :load, :created, :modified ] ) do |md,event|
  jazrb.call md[0], event
end

watch( %r(.*\.x?html?$), [ :load, :created, :modified ], nil, :batch => :html ) do |events|
  jazrb.call events
end

# don't watch vendor
watch( %r(^(vendor|doc)/), [ nil, :load ], lambda { false } )

Signal.trap('QUIT') do
  EM.stop
end

# Local Variables:
# mode:ruby
# End: