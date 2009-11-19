require 'rubygems'
require 'rake'

task :gemspec => :jasmine
task :gemspec => :qunit

begin
  require 'jeweler'
  Jeweler::Tasks.new do |gem|
    gem.name = "smparkes-jazrb"
    gem.summary = %Q{Env.js support for running Jasmine JS BDD specs}
    gem.description = %Q{Jazrb provides support for running specs based on the Jasmine JS BDD using the env.js JavaScript browser environment. Includes support for running under autotest via the autojaz command.}
    gem.email = "smparkes@smparkes.net"
    gem.homepage = "http://github.com/smparkes/jazrb"
    gem.authors = ["Steven Parkes"]
    gem.add_runtime_dependency "smparkes-envjs"
    gem.add_development_dependency "ragaskar-jsdoc_helper"
    gem.files = FileList["[A-Z]*.*", "{bin,generators,doc,lib,test,spec}/**/*"]
  end
rescue LoadError
  puts "Jeweler (or a dependency) not available. Install it with: sudo gem install jeweler"
end

task :test do
  cmd = "watchr jazrb.watchr --once"
  # puts cmd
  system cmd
end

task :test => :check_dependencies

task :default => :test

require 'rake/rdoctask'
Rake::RDocTask.new do |rdoc|
  if File.exist?('VERSION')
    version = File.read('VERSION')
  else
    version = ""
  end

  rdoc.rdoc_dir = 'rdoc'
  rdoc.title = "jazrb #{version}"
  rdoc.rdoc_files.include('README*')
  rdoc.rdoc_files.include('lib/**/*.rb')
end

task :qunit do
  rm_rf "lib/jazrb/qunit"
  mkdir_p "lib/jazrb/qunit"
  cp_r "vendor/qunit/qunit/.", "lib/jazrb/qunit/."
end

task :jasmine do
  system "cd vendor/jasmine && rake jasmine:build"
  rm_rf "doc/jasmine"
  mkdir_p "doc/jasmine"
  cp_r "vendor/jasmine/doc/.", "doc/jasmine/."
  rm_rf "lib/jazrb/jasmine"
  mkdir_p "lib/jazrb/jasmine"
  cp Dir["vendor/jasmine/lib/jasmine-*.js"][0], "lib/jazrb/jasmine/jasmine.js"
  cp Dir["vendor/jasmine/lib/*.js"], "lib/jazrb/jasmine"
end

# Local Variables:
# mode:ruby
# End:
