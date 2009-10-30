(function(){
  var prefix = Ruby.ENV["JAZRB_JS_PATH"];
  load(prefix + "/jasmine/jasmine.js");
  load(prefix + "/jasmine/TrivialReporter.js");
  load(prefix + "/jasmine/EnvjsReporter.js");
})();

(function () {
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var _EnvjsReporter = new jasmine.EnvjsReporter();
  jasmineEnv.addReporter(_EnvjsReporter);
  
  window.onload = function() {
    jasmineEnv.execute();
  };
})();
