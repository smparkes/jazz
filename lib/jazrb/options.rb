require 'optparse'

$jazrb_verbose = false
$jazrb_xml = false

parser = OptionParser.new do |o|

  o.on("-v","--verbose") do 
    $jazrb_verbose = true
  end

  o.on("-x","--xml") do 
    $jazrb_xml = true
  end

end

$jazrb_args = parser.parse ARGV
