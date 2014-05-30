/*global describe, expect, it */
(function ($) {
  "use strict";
  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(false).toBe(false);
    });

    it("jquery text() works", function() {
      expect($("<div>test</div>").text()).toBe("test");
    });
  });
}(jQuery));
