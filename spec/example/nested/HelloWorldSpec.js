"use strict";
(function($){
  describe("hello_world",function(){
    it("should contain the text 'Hello, World'",function(){
      expect($("div:contains('Hello, World')").size()).toBeGreaterThan(0);
    });
  });
}(jQuery));