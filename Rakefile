require 'rubygems'
require 'rake'

task :gemspec => :jasmine
task :gemspec => :qunit

begin
  require 'jeweler'
  Jeweler::Tasks.new do |gem|
    gem.name = "jazz"
    gem.summary = %Q{Env.js support for running JS tests and specs}
    gem.description = %Q{Jazz provides support for running specs based on frameworks like Jasmine using the env.js JavaScript browser environment.}
    gem.email = "smparkes@smparkes.net"
    gem.homepage = "http://github.com/smparkes/jazz"
    gem.authors = ["Steven Parkes"]
    gem.add_runtime_dependency "envjs", ">= 0.1.7"
    gem.add_runtime_dependency "smparkes-eventmachine"
    gem.add_runtime_dependency "nokogiri"
    gem.add_development_dependency "ragaskar-jsdoc_helper"
    # temporarily add vendor/jasmine ...
    gem.files = FileList["[A-Z]*.*", "{bin,generators,doc,lib,test,spec,vendor/jasmine}/**/*"]
  end
rescue LoadError
  puts "Jeweler (or a dependency) not available. Install it with: sudo gem install jeweler"
end

task :test do
  cmd = "wake --once"
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
  rdoc.title = "jazz #{version}"
  rdoc.rdoc_files.include('README*')
  rdoc.rdoc_files.include('lib/**/*.rb')
end

task :qunit do
  rm_rf "lib/jazz/qunit"
  mkdir_p "lib/jazz/qunit"
  cp_r "vendor/qunit/qunit/.", "lib/jazz/qunit/."
end

task :jasmine do
  system "cd vendor/jasmine && rake jasmine:build"
  rm_rf "doc/jasmine"
  mkdir_p "doc/jasmine"
  cp_r "vendor/jasmine/doc/.", "doc/jasmine/."
  rm_rf "lib/jazz/jasmine"
  mkdir_p "lib/jazz/jasmine"
  cp Dir["vendor/jasmine/lib/jasmine-*.js"][0], "lib/jazz/jasmine/jasmine.js"
  cp Dir["vendor/jasmine/lib/*.js"], "lib/jazz/jasmine"
end

# Local Variables:
# mode:ruby
# End:
