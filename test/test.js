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

  describe("Suite with fixtures", function () {

    beforeEach(function() {
          loadFixtures("fixture.html");
    });

    it("should have access to fixture", function () {
      $("#test").addClass("test");
      expect($("#test")).toExist();
    });

    it("should run the plugin", function () {
      $("#test").defaultPluginName({});
      expect($("#test").text()).toBe("test");
    });

  });
}(jQuery));
