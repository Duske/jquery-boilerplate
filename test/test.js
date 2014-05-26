/*global describe, expect, it */
"use strict";
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(false).toBe(true);
  });
});
describe("myFunction", function() {
    var myfunc = NS.myFunction;

    beforeEach(function(){
        spyOn(myfunc, 'init').andCallThrough();
    });

    afterEach(function() {
        //...
    });

    it("should be able to initialize", function() {
        expect(myfunc.init).toBeDefined();
        myfunc.init();
        expect(myfunc.init).toHaveBeenCalled();
    });

});
