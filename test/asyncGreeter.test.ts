// tslint:disable-next-line:no-implicit-dependencies
import { assert, expect } from "chai";
import { AsyncGreeter } from "../src/asyncGreeter";

describe("AsyncGreeter", function() {

	this.slow(10000);
	this.timeout(20000);

	it("Should be possible to get greeting message", async function() {
		// ARRANGE
		const target = new AsyncGreeter();

		// ACT

		// tslint:disable-next-line:no-debugger
		debugger;
		const message: string = await target.getGreetingMessage();

		// ASSERT
		assert.strictEqual(message, "Hello async !");

	});

});
