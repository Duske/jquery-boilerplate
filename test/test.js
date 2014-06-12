/*global describe, expect, it */
(function ($) {
  "use strict";
  var fixtures = jasmine.getFixtures();
  fixtures.fixturesPath = "base/test/fixtures/";

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(false).toBe(false);
    });

    it("jquery text() works", function() {
      expect($("<div>test</div>").text()).toBe("test");
    });
  });
  describe('test', function () {

      beforeEach(function() {
          fixtures.load("fixture.html");
    });
      it('should add some html', function () {
        $("#test").addClass("test");
        expect($("#test").hasClass("test")).toBe(true);
      });
      it('should add some html', function () {
        expect($("#test").text()).toBe("TEST");
      });
  });
}(jQuery));
