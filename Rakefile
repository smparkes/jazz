require 'rubygems'

# task :gemspec => :jasmine
# task :gemspec => :qunit

gem 'hoe', '>= 2.5'
require 'hoe'

Hoe.plugin :debugging, :doofus, :git
Hoe.plugins.delete :rubyforge

Hoe.spec "jazz" do

  developer 'Steven Parkes', 'smparkes@smparkes.net'

  self.readme_file              = 'README.rdoc'
  self.extra_rdoc_files         = Dir['*.rdoc']
  self.history_file             = "CHANGELOG.rdoc"
  self.readme_file              = "README.rdoc"

  self.extra_deps = [
    ['envjs', '>= 0.1.7'],
    ['eventmachine', '>= 0.12.11'],
    ['nokogiri', '>= 1.4.1'],
    ['haml', '>= 2.2.20']                     
  ]

  self.extra_dev_deps = [
    ['ragaskar-jsdoc_helper', '>= 0.2.1']
  ]

  clean_globs    << "{example,lib}/**/*.html"

end

task :test do
  cmd = "wake --once"
  # puts cmd
  system cmd
end

# task :test => :check_dependencies

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
