"use strict";

import { expect } from "chai";

import fizzBuzz from "../src/fizz-buzz";

describe("fizzBuzz", function() {
  context("when the number is divisible by 3", function() {
    it("returns fizz", function() {
      expect(fizzBuzz(3)).to.be.equal("fizz");
    });
  });

  context("when the number is divisible by 5", function() {
    it("returns buzz", function() {
      expect(fizzBuzz(5)).to.be.equal("buzz");
    });
  });

  context("when the number is divisible by 3 and 5", function() {
    it("returns fizz buzz", function() {
      expect(fizzBuzz(15)).to.be.equal("fizz buzz");
    });
  });

  context("when the number is not divisible by 3 or 5", function() {
    it("returns the number as string", function() {
      expect(fizzBuzz(1)).to.be.equal("1");
    });
  });
});
