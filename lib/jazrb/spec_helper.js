/*jslint evil: true*/
"use strict";
(function(){
  var global = (function(){return this;}());

  var run = !!global.Envjs;
  var match = /\?([^?]+)$/.exec(window.location.href);
  if(match){
    var pairs = match[1].split("&");
    var i;
    for (i=0; i<pairs.length; i++) {
      var kv = pairs[i].split("=");
      var k = kv[0];
      var v = kv[1];
      if(k === "specs"){
        run = true;
      }
    }
  }

  if(run) {

    var jazrb = global.jazrb;

    if (!jazrb.root) {
      var helper = jazrb.helper;
      jazrb.root = helper.slice(0,helper.lastIndexOf("/lib/jazrb/spec_helper.js"));
    }

    if(!this.jasmine){
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/base.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/util.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/Env.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/Reporter.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/Block.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/JsApiReporter.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/Matchers.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/mock-timeout.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/MultiReporter.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/NestedResults.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/PrettyPrinter.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/Queue.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/Reporters.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/Runner.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/Spec.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/Suite.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/WaitsBlock.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/src/WaitsForBlock.js'></script>");
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/lib/TrivialReporter.js'></script>");
      if(this.Envjs){
        document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jasmine/lib/EnvjsReporter.js'></script>");
      }
      (function(){
        var headID = document.getElementsByTagName("head")[0];         
        var cssNode = document.createElement('link');
        cssNode.type = 'text/css';
        cssNode.rel = 'stylesheet';
        cssNode.href = jazrb.root + "/vendor/jasmine/lib/jasmine.css";
        cssNode.media = 'screen';
        headID.appendChild(cssNode);
      }());
    }
    if (!global.jQuery) {
      document.write("<script type='text/javascript' src='" + jazrb.root + "/vendor/jquery/dist/jquery.js'></script>");
    }
    document.write("<script type='text/javascript' src='"+jazrb.root+"/lib/jazrb/spec_runner.js'></script>");
  }
}());