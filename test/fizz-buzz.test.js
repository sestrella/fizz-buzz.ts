"use strict";
var chai_1 = require("chai");
var fizz_buzz_1 = require("../src/fizz-buzz");
describe("fizzBuzz", function () {
    context("when the number is multiple of 3", function () {
        it("returns fizz", function () {
            chai_1.expect(fizz_buzz_1.default(3)).to.be.equal("fizz");
        });
    });
});
