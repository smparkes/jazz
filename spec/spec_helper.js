/*jslint evil: true*/
"use strict";
(function(){
  var global = (function(){return this;}());
  if(!global.jasmine){
    document.write("<script type='text/javascript' src='" + jazrb_root + "/lib/jazrb/jasmine/jasmine.js'></script>");
    document.write("<script type='text/javascript' src='" + jazrb_root + "/lib/jazrb/jasmine/TrivialReporter.js'></script>");
    if(global.Envjs){
      document.write("<script type='text/javascript' src='" + jazrb_root + "/lib/jazrb/jasmine/EnvjsReporter.js'></script>");
    }
    (function(){
      var headID = document.getElementsByTagName("head")[0];         
      var cssNode = document.createElement('link');
      cssNode.type = 'text/css';
      cssNode.rel = 'stylesheet';
      cssNode.href = jazrb_root + "/vendor/jasmine/lib/jasmine.css";
      cssNode.media = 'screen';
      headID.appendChild(cssNode);
    }());
  }
  document.write("<script type='text/javascript' src='" + jazrb_root + "/vendor/jquery/dist/jquery.js'></script>");
  document.write("<script type='text/javascript' src='" + jazrb_root + "/spec/spec_runner.js'></script>");
}());