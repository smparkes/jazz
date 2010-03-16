require 'optparse'

$jazz_verbose = false
$jazz_xml = false
$jazz_deps = nil
$jazz_qunit = false
$jazz_jasmine = false
$jazz_wake = false
$jazz_envjsrb = false
$jazz_firefox = false
$jazz_chrome = false
$jazz_chromium = false
$jazz_ie = false
$jazz_safari = false
$jazz_testflock = false

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

  o.on("--wake") do
    $jazz_wake = true
  end

  o.on("--wake") do
    $jazz_wake = true
  end

  o.on("--wake") do
    $jazz_wake = true
  end

  o.on("--wake") do
    $jazz_wake = true
  end

  o.on("--chomium") do
    $jazz_chomium = true
  end

  o.on("--chrome") do
    $jazz_chrome = true
  end

  o.on("--ie") do
    $jazz_ie = true
  end

  o.on("--testflock") do
    $jazz_testflock = true
  end

  o.on("--safari") do
    $jazz_safari = true
  end

  o.on("--firefox") do
    $jazz_firefox = true
  end

end.parse!
