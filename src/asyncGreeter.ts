export class AsyncGreeter {

	getGreetingMessage(): Promise<string> {
		const promise = new Promise<string>((resolve, reject) => {
			setTimeout(() => {
				resolve("Hello async !");
			}, 500);
		});

		return promise;
	}

}
