/*global describe, expect, it */
(function ($) {
  "use strict";
  jasmine.getFixtures().fixturesPath = "base/test/fixtures/";

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(false).toBe(false);
    });

    it("jquery text() works", function() {
      expect($("<div>test</div>").text()).toBe("test");
    });

  });
  describe("jquery plugin", function() {
    var elem;

    beforeEach(function() {
        loadFixtures("fixture.html");
        elem = $("#test");
    });

    elem.addClass("test");
    expect(elem).toHaveClass("test");
  });
}(jQuery));
