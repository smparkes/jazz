/*jslint evil: true*/
"use strict";
(function(){
  var global = (function(){return this;}());
  global.jazz = global.jazz || {};
  global.jazz.app = global.jazz.app || {};
  global.jazz.app.root = global.jazz.app.root || "../..";
  document.write("<script type='text/javascript' src='"+global.jazz.app.root+"/spec/example/spec_helper.js'></script>");
}());

