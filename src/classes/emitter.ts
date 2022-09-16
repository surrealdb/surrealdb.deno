export type EventMap<K extends string = string> = {
	[KEY in K]: any[]
}
type Events<T extends EventMap> = {
	[K in keyof T]?: Array<(...ev: T[K]) => void>
}

export default class Emitter<T extends EventMap> {

	#events: Events<T> = {};

	on<E extends keyof T>(e: E, func: (...ev: T[E]) => void) {
		if (!this.#events[e]) {
			this.#events[e] = [];
		}
		this.#events[e]!.push(func);
	}

	off<E extends keyof T>(e: E, func: (...ev: T[E]) => void) {
		if (this.#events[e]) {
			const idx = this.#events[e]!.indexOf(func);
			if (idx > -1) {
				this.#events[e]!.splice(idx, 1);
			}
		}
	}

	once<E extends keyof T>(e: E, func: (...ev: T[E]) => void) {
		const f = (...args: T[E])  => {
			this.off(e, f);
			func(...args);
		}

		this.on(e, f);
	}

	emit<E extends keyof T>(e: E, ...args: T[E]) {
		if (this.#events[e]) {
			this.#events[e]!.forEach(func => {
				func.apply(this, args);
			});
		}
	}

	removeAllListeners<E extends keyof T>(e?: E) {
		if (e) {
			if (this.#events[e]) {
				this.#events[e] = [];
			}
		} else {
			for (const e in this.#events) {
				this.#events[e] = [];
			}
		}
	}
}
