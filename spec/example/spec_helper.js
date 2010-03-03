/*jslint evil: true*/
"use strict";
(function(){
  var global = (function(){return this;}());
  global.jazrb = global.jazrb || {};
  global.jazrb.app = global.jazrb.app || {};
  global.jazrb.app.root = global.jazrb.app.root || "..";
  document.write("<script type='text/javascript' src='"+global.jazrb.app.root+"/spec/spec_helper.js'></script>");
}());
