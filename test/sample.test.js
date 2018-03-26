"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-implicit-dependencies
var chai_1 = require("chai");
var greeter_1 = require("../src/greeter");
describe("SampleTests", function () {
    it("should be possible to run unit tests", function () {
        // ARRANGE
        var target = new greeter_1.Greeter();
        // ACT
        // tslint:disable-next-line:no-debugger
        debugger;
        var message = target.sayHello();
        // ASSERT
        chai_1.assert.strictEqual(message, "Hello !");
    });
});
//# sourceMappingURL=sample.test.js.map