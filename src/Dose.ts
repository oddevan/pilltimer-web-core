import { Temporal } from 'temporal-polyfill';

class Dose {
	private _timestamp: Temporal.Instant;

	constructor(timestamp: Temporal.Instant | bigint) {
		this._timestamp = typeof timestamp == 'bigint' ? Temporal.Instant.fromEpochNanoseconds(timestamp) : timestamp;
	}

	get timestamp() { return this._timestamp; }
}