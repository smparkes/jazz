/*jslint evil: true*/
"use strict";
(function(){
  var global = (function(){return this;}());
  global.jazrb = global.jazrb || {};
  global.jazrb.app = global.jazrb.app || {};
  global.jazrb.app.root = global.jazrb.app.root || ".";
  global.jazrb.helper = global.jazrb.helper || global.jazrb.app.root + "/lib/jazrb/spec_helper.js";
  document.write("<script type='text/javascript' src='"+global.jazrb.helper+"'></script>");
}());
