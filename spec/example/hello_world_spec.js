"use strict";
(function($){
  describe("hello_world",function(){
    describe("contents",function(){
      var loops = 50000;
      var fn = function(){
        it("should contain the text 'hello, world'",function(){
          expect($("div:contains('hello, world')").size()).toBeGreaterThan(0);
          for(var j = 0; j<loops; j++) {}
        });

        it("should contain the text 'hello, world'",function(){
          expect($("div:contains('hello, world')").size()).toBeGreaterThan(0);
          for(var j = 0; j<loops; j++) {}
        });
      };
      
      for(var i = 0; i < 10; i++ ) {
        fn();
      }
    });
  });
}(jQuery));