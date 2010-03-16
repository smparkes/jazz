/*jslint evil: true*/
"use strict";
(function(){
  if (false) {
    var global = (function(){return this;}());
    global.jazz = global.jazz || {};
    global.jazz.app = global.jazz.app || {};
    global.jazz.app.root = global.jazz.app.root || "..";
    document.write("<script type='text/javascript' src='"+global.jazz.app.root+"/spec/spec_helper.js'></script>");
  }
  jazz.include("spec/spec_helper.js");
}());
