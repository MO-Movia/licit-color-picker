// clamp.test.ts
import {clamp} from './clamp';

describe('clamp', () => {
  it('returns the value when it is within the range', () => {
    expect(clamp(0, 5, 10)).toBe(5);
  });

  it('returns the minimum value when the value is below the range', () => {
    expect(clamp(0, -5, 10)).toBe(0);
  });

  it('returns the maximum value when the value is above the range', () => {
    expect(clamp(0, 15, 10)).toBe(10);
  });

  it('returns the value when it is equal to the minimum', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  it('returns the value when it is equal to the maximum', () => {
    expect(clamp(0, 10, 10)).toBe(10);
  });

  it('handles floating-point numbers', () => {
    expect(clamp(0.5, 0.2, 1.0)).toBe(0.5);
  });

});
