(function(){
  var prefix = Ruby.ENV["JAZRB_JS_PATH"];
  load(prefix + "/../../vendor/jasmine/src/base.js");
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
})();

(function () {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  jasmineEnv.addReporter(new jasmine.XMLReporter());
  
  window.onload = function() {
    jasmineEnv.execute();
  };
})();

include = function(fn) {
  if(this.Envjs){
    var s = Envjs.$env.location(fn);
    s = s.replace(/^file:\/\//,"");
    load(s);
  } else {
    jasmine.include(fn);
  }
};

