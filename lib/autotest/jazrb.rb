require 'autotest'

Autotest.add_hook :initialize do |at|
  # at.clear_mappings
  at.add_mapping(%r%^spec/(suites/)?.*Spec.js$%) { |filename, _|
    filename
  }
  at.add_mapping(%r%^spec/(suites/)?.*_spec.js$%) { |filename, _|
    filename
  }
  at.add_mapping(%r%^lib/(.*)\.js$%) { |_, m|
    ["spec/#{m[1]}Spec.js", "spec/suites/#{m[1]}Spec.js"]
  }
  at.add_mapping(%r%^src/(.*)\.js$%) { |_, m|
    ["spec/#{m[1]}Spec.js", "spec/suites/#{m[1]}Spec.js"]
  }
  at.add_mapping(%r%^lib/(.*)\.js$%) { |_, m|
    ["spec/#{m[1]}_spec.js", "spec/suites/#{m[1]}_spec.js"]
  }
  at.add_mapping(%r%^spec/(spec_helper|shared/.*)\.js$%) {
    at.files_matching %r%^spec/.*Spec\.js$%
  }
  at.add_mapping(%r%^spec/(spec_helper|shared/.*)\.js$%) {
    at.files_matching %r%^spec/.*_spec\.js$%
  }
end

class Autotest::Jazrb < Autotest

  def initialize
    super
    self.failed_results_re = /^\d+\)\n(?:\e\[\d*m)?(?:.*?in )?'([^\n]*)'(?: FAILED)?(?:\e\[\d*m)?\n\n?(.*?(\n\n\(.*?)?)\n\n/m
    self.completed_re = /\n(?:\e\[\d*m)?\d* examples?/m
  end

  def consolidate_failures(failed)
    filters = new_hash_of_arrays
    failed.each do |spec, trace|
      if trace =~ /\n(\.\/)?(.*_spec\.js):[\d]+:/
        filters[$2] << spec
      end
      if trace =~ /\n(\.\/)?(.*Spec\.js):[\d]+:/
        filters[$2] << spec
      end
    end
    return filters
  end

  def make_test_cmd(files_to_test)
    return '' if files_to_test.empty?
    spec_program = "jazrb"
    return "#{spec_program} #{files_to_test.keys.flatten.join(' ')}"
  end

end
