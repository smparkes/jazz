Autotest.add_discovery do
  "jazrb" if File.directory?('spec') && ENV['JAZRB']
end
