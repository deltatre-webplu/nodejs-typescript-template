// tslint:disable:no-console

import { Greeter } from "./src/greeter";
import { AsyncGreeter } from "./src/asyncGreeter";

run()
	.then(
		() => {},
		(reason) => { console.error(reason); }
	);

async function run() {

	console.log("Start of demonstration...");

	console.log("Sync greeter in action...");

	const greeter = new Greeter();
	const message: string = greeter.getGreetingMessage();
	console.log(message);

	console.log("Async greeter in action...");

	const asyncGreeter = new AsyncGreeter();
	const asyncMessage: string = await greeter.getGreetingMessage();
	console.log(asyncMessage);
}
