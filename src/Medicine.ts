import type { Temporal } from "temporal-polyfill";

class Medicine {
	private _name: string;
	private _isActive: boolean;
	private _hourlyInterval: number;
	private _dailyLimit: number;

	private _nextDoseMemo?: Temporal.Instant;

	constructor(name: string, isActive = true, hourlyInterval = 0, dailyLimit = 0) {
		this._name = name;
		this._isActive = isActive;
		this._hourlyInterval = hourlyInterval;
		this._dailyLimit = dailyLimit;

		this._nextDoseMemo = undefined;
	}

	get name() { return this._name; }
	get isActive() { return this._isActive; }
	get hourlyInterval() { return this._hourlyInterval; }
	get dailyLimit() { return this._dailyLimit; }

	get nextDose() {
		this._nextDoseMemo ??= this.calculateNextDose();
		return this._nextDoseMemo;
	}

	private calculateNextDose() {
		return 0;
	}
}