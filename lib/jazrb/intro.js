(function(){
  var prefix = Ruby.ENV["JAZRB_JS_PATH"];
  load(prefix + "/jasmine/jasmine.js");
  load(prefix + "/jasmine/TrivialReporter.js");
  load(prefix + "/jasmine/XMLReporter.js");
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

