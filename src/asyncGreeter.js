"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncGreeter {
    getGreetingMessage() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello async !");
            }, 500);
        });
        return promise;
    }
}
exports.AsyncGreeter = AsyncGreeter;
//# sourceMappingURL=asyncGreeter.js.map