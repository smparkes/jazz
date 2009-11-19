require 'optparse'

$jazrb_verbose = false
$jazrb_xml = false
$jazrb_deps = nil
$jazrb_qunit = false

OptionParser.new do |o|

  o.on("-v","--verbose") do 
    $jazrb_verbose = true
  end

  o.on("-x","--xml") do 
    $jazrb_xml = true
  end

  o.on("-q","--qunit") do 
    $jazrb_qunit = true
  end

  o.on("--deps PATH") do |path|
    $jazrb_deps = path
  end

end.parse!
