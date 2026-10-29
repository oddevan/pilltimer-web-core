import { test, expect } from 'vitest';
import { twentyFourHoursAgo } from './utils.js';

test('twentyFourHoursAgo', () => {
	expect(twentyFourHoursAgo(1793235996)).toBe(1793149596);
});
