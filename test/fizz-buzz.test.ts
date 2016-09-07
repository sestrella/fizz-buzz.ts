"use strict";

import { expect } from "chai";

import fizzBuzz from "../src/fizz-buzz";

describe("fizzBuzz", function() {
  context("when the number is divisible by 3", function() {
    it("returns fizz", function() {
      expect(fizzBuzz(3)).to.be.equal("fizz");
    });
  });
});
