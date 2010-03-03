require 'optparse'

$jazz_verbose = false
$jazz_xml = false
$jazz_deps = nil
$jazz_qunit = false

OptionParser.new do |o|

  o.on("-v","--verbose") do 
    $jazz_verbose = true
  end

  o.on("-x","--xml") do 
    $jazz_xml = true
  end

  o.on("-q","--qunit") do 
    $jazz_qunit = true
  end

  o.on("--deps PATH") do |path|
    $jazz_deps = path
  end

end.parse!
