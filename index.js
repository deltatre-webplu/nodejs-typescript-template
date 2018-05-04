"use strict";
// tslint:disable:no-console
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const greeter_1 = require("./src/greeter");
const asyncGreeter_1 = require("./src/asyncGreeter");
run()
    .then(() => { }, (reason) => { console.error(reason); });
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Start of demonstration...");
        console.log("Sync greeter in action...");
        const greeter = new greeter_1.Greeter();
        const message = greeter.getGreetingMessage();
        console.log(message);
        console.log("Async greeter in action...");
        const asyncGreeter = new asyncGreeter_1.AsyncGreeter();
        const asyncMessage = yield greeter.getGreetingMessage();
        console.log(asyncMessage);
    });
}
//# sourceMappingURL=index.js.map