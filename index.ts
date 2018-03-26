import { Greeter } from "./src/greeter";

const greeter = new Greeter();
const message: string = greeter.sayHello();

// tslint:disable-next-line:no-console
console.log(message);
