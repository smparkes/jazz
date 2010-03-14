// debug("intro");
"use strict";
(function(){
  if (this.jazz) {
    return;
  }

  var jazz = this.jazz = {};

  var env_name = "JAZZ_JS_PATH";
  var prefix = Ruby.ENV[env_name];
  if (Ruby.File["exist?"](prefix+"/../../vendor/jasmine/src/base.js")) {
    load(prefix + "/../../vendor/jasmine/src/base.js");
    load(prefix + "/../../vendor/jasmine/src/util.js");
    load(prefix + "/../../vendor/jasmine/src/Env.js");
    load(prefix + "/../../vendor/jasmine/src/Reporter.js");
    load(prefix + "/../../vendor/jasmine/src/Block.js");
    load(prefix + "/../../vendor/jasmine/src/JsApiReporter.js");
    load(prefix + "/../../vendor/jasmine/src/Matchers.js");
    load(prefix + "/../../vendor/jasmine/src/mock-timeout.js");
    load(prefix + "/../../vendor/jasmine/src/MultiReporter.js");
    load(prefix + "/../../vendor/jasmine/src/NestedResults.js");
    load(prefix + "/../../vendor/jasmine/src/PrettyPrinter.js");
    load(prefix + "/../../vendor/jasmine/src/Queue.js");
    load(prefix + "/../../vendor/jasmine/src/Reporters.js");
    load(prefix + "/../../vendor/jasmine/src/Runner.js");
    load(prefix + "/../../vendor/jasmine/src/Spec.js");
    load(prefix + "/../../vendor/jasmine/src/Suite.js");
    load(prefix + "/../../vendor/jasmine/src/WaitsBlock.js");
    load(prefix + "/../../vendor/jasmine/src/WaitsForBlock.js");
    load(prefix + "/../../vendor/jasmine/lib/TrivialReporter.js");
    load(prefix + "/../../vendor/jasmine/lib/XMLReporter.js");
  } else {
    load(prefix + "/jasmine/jasmine.js");
    load(prefix + "/jasmine/TrivialReporter.js");
    load(prefix + "/jasmine/XMLReporter.js");
  }

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;
  jasmineEnv.addReporter(new jasmine.XMLReporter());
  // debug("onload",$inner);
  window.onload = function() {
    // debug("exec");
    // try{throw new Error;}catch(e){debug(e.stack);}
    jasmineEnv.execute();
  };

  var global = (function(){return this;}());

  jazz.include = function(fn) {
    if(global.Envjs){
      var s = global.Envjs.$env.location(fn);
      s = s.replace(/^file:\/\//,"");
      load(s);
    } else {
      jasmine.include(fn);
    }
  };

  this.onerror = function(e) {
    print("<testsuites id='"+jasmine.XMLReporter.random+"'>");
    print("  <testsuite name='parse'>");
    print("    <testcase name='error'>");
    print("      <failure type='' message='"+e+"'>");
    print("<![CDATA[");
    if (e.stack) {
      print(e.stack);
    }
    if (e.backtrace) {
      print(e.backtrace().join("\n"));
    }
    print("]]>");
    print("      </failure>");
    print("    </testcase>");
    print("  </testsuite>");
    print("</testsuites>");
  };

}());
// debug("end intro");