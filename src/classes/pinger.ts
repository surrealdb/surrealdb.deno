export default class Pinger {

	#pinger: number | undefined = undefined;
	#interval: number;

	constructor(interval = 30000) {
		this.#interval = interval;
	}

	start(func: (...args: any[]) => void, ...args: any[]) {
		this.#pinger = setInterval(func, this.#interval, ...args);
	}

	stop() {
		clearInterval(this.#pinger);
	}
}
