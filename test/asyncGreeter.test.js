"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-implicit-dependencies
const chai_1 = require("chai");
const asyncGreeter_1 = require("../src/asyncGreeter");
describe("AsyncGreeter", function () {
    this.slow(10000);
    this.timeout(20000);
    it("Should be possible to get greeting message", function () {
        return __awaiter(this, void 0, void 0, function* () {
            // ARRANGE
            const target = new asyncGreeter_1.AsyncGreeter();
            // ACT
            // tslint:disable-next-line:no-debugger
            debugger;
            const message = yield target.getGreetingMessage();
            // ASSERT
            chai_1.assert.strictEqual(message, "Hello async !");
        });
    });
});
//# sourceMappingURL=asyncGreeter.test.js.map