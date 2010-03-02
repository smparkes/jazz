this.QUnit || load(Ruby.ENV["JAZZ_JS_PATH"]+"/qunit/qunit.js");

(function(){

  var APOS = "'"; QUOTE = '"';
  var ESCAPED_QUOTE = {  };
  ESCAPED_QUOTE[QUOTE] = '&quot;';
  ESCAPED_QUOTE[APOS] = '&apos;';
   
  function formatAttributes(attributes) {
    var att_value;
    var apos_pos, quot_pos;
    var use_quote, escape, quote_to_escape;
    var att_str;
    var re;
    var result = '';
    
    for (var att in attributes) {
      att_value = attributes[att] || "";

      att_value = att_value.replace(/&/g, "&amp;");
      att_value = att_value.replace(/</g, "&lt;");
      att_value = att_value.replace(/>/g, "&gt;");

      // Find first quote marks if any
      apos_pos = att_value.indexOf(APOS);
      quot_pos = att_value.indexOf(QUOTE);
      
      // Determine which quote type to use around 
      // the attribute value
      if (apos_pos == -1 && quot_pos == -1) {
        att_str = ' ' + att + "='" + att_value +  "'";
        result += att_str;
        continue;
      }
      
      // Prefer the single quote unless forced to use double
      if (quot_pos != -1 && quot_pos < apos_pos) {
        use_quote = APOS;
      }
      else {
        use_quote = QUOTE;
      }
      
      // Figure out which kind of quote to escape
      // Use nice dictionary instead of yucky if-else nests
      escape = ESCAPED_QUOTE[use_quote];
      
      // Escape only the right kind of quote
      re = new RegExp(use_quote,'g');
      att_str = ' ' + att + '=' + use_quote + 
        att_value.replace(re, escape) + use_quote;
      result += att_str;
    }
    return result;
  };


  var module;
  var test;

  var started = false;

  QUnit.moduleStart = function(m,te) {
    if(!started){
      started = true;
      print("<testsuites>");
    }
    if(module) {
      print("  </testsuite>");
    }
    print("  <testsuite"+formatAttributes({name:m})+">");
    module = m;
  };

  QUnit.testStart = function(t) {
    test = t;
  };

  QUnit.log = function(r,m) {
    var name = test + " : " + m;
    var msg;
    if (!r) {
      var match = m.match(/(.*), (expected: .* result: .*)/);
      if(match) {
        name = match[1];
        msg = match[2];
      } else {
        name = test;
        msg = m;
      }
    }
    print("    <testcase"+formatAttributes({name:name})+">");
    if(!r){
      print("      <failure"+formatAttributes({message:msg})+">");
      print("      </failure>");
    }
    print("    </testcase>");
    // var s = ( r ? "PASS (" : "FAIL (" ) + ") " + test_string + m;
    // print(s);
  };

  QUnit.done = function(f,t) {
    // print((t-f) + " Passed, " +  f + " Failed, " + t + " Total Tests" );
    if(module){
      print("  </testsuite>");
    }
    if(started) {
      print("</testsuites>");
    }
  };

})(QUnit);
