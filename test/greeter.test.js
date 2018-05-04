"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-implicit-dependencies
const chai_1 = require("chai");
const greeter_1 = require("../src/greeter");
describe("Greeter", function () {
    it("Should be possible to get greeting message", function () {
        // ARRANGE
        const target = new greeter_1.Greeter();
        // ACT
        // tslint:disable-next-line:no-debugger
        debugger;
        const message = target.getGreetingMessage();
        // ASSERT
        chai_1.assert.strictEqual(message, "Hello !");
    });
});
//# sourceMappingURL=greeter.test.js.map