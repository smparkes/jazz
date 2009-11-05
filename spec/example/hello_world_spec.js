jasmine.include(jazrb_root + "/spec/example/spec_helper.js");

(function($){

  describe("hello_world",function(){
    
    describe("contents",function(){

      var loops = 500000;

      for(var i = 0; i < 10; i++ ) {

        it("should contain the text 'Hello, World'",function(){
          expect($("div:contains('Hello, World')").size()).toBeGreaterThan(0);
          for(var j = 0; j<loops; j++);
        });

        it("should contain the text 'Hello, World'",function(){
          expect($("div:contains('Hello, World')").size()).toBeGreaterThan(0);
          for(var j = 0; j<loops; j++);
        });

      }

    });

  });

})(jQuery);