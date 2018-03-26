// tslint:disable-next-line:no-implicit-dependencies
import { assert, expect } from "chai";
import { Greeter } from "../src/greeter";

describe("SampleTests", function() {

	it("should be possible to run unit tests", function() {
		// ARRANGE
		const target = new Greeter();

		// ACT

		// tslint:disable-next-line:no-debugger
		debugger;
		const message: string = target.sayHello();

		// ASSERT
		assert.strictEqual(message, "Hello !");

	});

});
