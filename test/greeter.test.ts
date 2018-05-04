// tslint:disable-next-line:no-implicit-dependencies
import { assert, expect } from "chai";
import { Greeter } from "../src/greeter";

describe("Greeter", function() {

	it("Should be possible to get greeting message", function() {
		// ARRANGE
		const target = new Greeter();

		// ACT

		// tslint:disable-next-line:no-debugger
		debugger;
		const message: string = target.getGreetingMessage();

		// ASSERT
		assert.strictEqual(message, "Hello !");

	});

});
