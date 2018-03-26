"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-implicit-dependencies
var chai_1 = require("chai");
describe("SampleTests", function () {
    it("should be possible to run unit tests", function () {
        // tslint:disable-next-line:no-debugger
        debugger; // breakpoints do not work with mocha
        chai_1.assert.isTrue(3 === 3);
        chai_1.assert.isFalse(false);
        chai_1.assert.strictEqual("hello", "hello");
    });
});
//# sourceMappingURL=sample.test.js.map