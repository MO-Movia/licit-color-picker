import { getRgb, parseColor, getSaturationCoordinates, getHueCoordinates, clamp, isValidHexaCode } from './ColorUtils';

describe('Converters', () => {

describe('getRgb function', () => {
  test('should return the correct RGB values', () => {
    expect(getRgb('rgb(255, 0, 0)')).toEqual({ r: 255, g: 0, b: 0 });
    expect(getRgb('rgb(0, 255, 0)')).toEqual({ r: 0, g: 255, b: 0 });
    expect(getRgb('rgb(0, 0, 255)')).toEqual({ r: 0, g: 0, b: 255 });
  });

  test('should handle invalid input and return default values', () => {
    expect(getRgb('invalidColor')).toEqual({ r: 0, g: 0, b: 0 });
  });
});

describe('parseColor function', () => {
    test('should return the correct color object', () => {
      const mockColorHSV = { h: 120, s: 0.5, v: 0.8 };

      jest.mock('./ColorUtils', () => ({
        hsvToRgb: jest.fn(() => ({ r: 51, g: 204, b: 102 })),
      }));

      jest.mock('./ColorUtils', () => ({
        rgbToHex: jest.fn(() => '#33cc66'),
      }));

      const result = parseColor(mockColorHSV);

      const expectedResult = {
        hex: '#020202',
      rgb: { r: 2, g: 2, b: 2 },
      hsv: { h: 120, s: 0.5, v: 0.8 }
      };

      expect(result).toEqual(expectedResult);
    });
  });

  describe('getSaturationCoordinates function', () => {
    test('should return the correct saturation coordinates', () => {
      const testCases = [
        { hsv: { h: 0, s: 0, v: 0 }, expected: [0, 100] },
        { hsv: { h: 120, s: 0.5, v: 0.8 }, expected: [0.5, 99.2] },
      ];

      testCases.forEach(({ hsv, expected }) => {
        const result = getSaturationCoordinates(hsv);
        expect(result).toEqual(expected);
      });
    });
  });

  describe('getHueCoordinates function', () => {
    test('should return the correct hue coordinate', () => {
      const testCases = [
        { hsv: { h: 0, s: 0, v: 0 }, expected: 0 },
        { hsv: { h: 120, s: 0.5, v: 0.8 }, expected: 33.333333333333336 },
        { hsv: { h: 240, s: 0.75, v: 0.6 }, expected: 66.66666666666667 },
        { hsv: { h: 360, s: 1, v: 1 }, expected: 100 },
      ];

      testCases.forEach(({ hsv, expected }) => {
        const result = getHueCoordinates(hsv);
        expect(result).toBeCloseTo(expected);
    });
  });

  describe('clamp function', () => {
    test('should clamp the number within the specified range', () => {
      const testCases = [
        { number: 5, min: 0, max: 10, expected: 5 },
        { number: 15, min: 0, max: 10, expected: 10 },
        { number: -5, min: 0, max: 10, expected: 0 },
        { number: 7, min: 0, max: 5, expected: 5 },
      ];

      testCases.forEach(({ number, min, max, expected }) => {
        const result = clamp(number, min, max);
        expect(result).toBe(expected);
      });
    });

    test('should handle cases with only min or max specified', () => {
      const testCases = [
        { number: 5, min: 0, max: undefined, expected: 0 },
        { number: 15, min: undefined, max: 10, expected: 10 },
        { number: -5, min: undefined, max: undefined, expected: -5 },
      ];

      testCases.forEach(({ number, min, max, expected }) => {
        const result = clamp(number, min || 0, max || 0);
        expect(result).toBe(expected);
      });
    });
  });

  describe('isValidHexaCode function', () => {
    test('should return true for valid hex codes', () => {
      const validHexCodes = ['#123', '#ABCDEF', '#abcdef', '#000000', '#FFFFFF'];

      validHexCodes.forEach((hexCode) => {
        const result = isValidHexaCode(hexCode);
        expect(result).toBe(true);
      });
    });

    test('should return false for invalid hex codes', () => {
      const invalidHexCodes = ['#12345', '#GGG', '123456', 'invalid', ''];

      invalidHexCodes.forEach((hexCode) => {
        const result = isValidHexaCode(hexCode);
        expect(result).toBe(false);
      });
    });
  });

});

});
