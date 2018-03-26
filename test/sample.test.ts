// tslint:disable-next-line:no-implicit-dependencies
import { assert, expect } from "chai";

describe("SampleTests", function() {

	it("should be possible to run unit tests", function() {

		// tslint:disable-next-line:no-debugger
		debugger; // breakpoints do not work with mocha

		assert.isTrue(3 === 3);
		assert.isFalse(false);
		assert.strictEqual("hello", "hello");
	});

});
