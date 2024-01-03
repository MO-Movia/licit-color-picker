import { hexToRgb, rgbToHsv } from './Converters';

describe('hexToRgb function', () => {
  test('should convert 3-digit hex code to RGB', () => {
    const result = hexToRgb('#123');
    expect(result).toEqual({ r: 17, g: 34, b: 51 });
  });

  test('should convert 6-digit hex code to RGB', () => {
    const result = hexToRgb('#aabbcc');
    expect(result).toEqual({ r: 170, g: 187, b: 204 });
  });

  test('should handle lowercase hex codes', () => {
    const result = hexToRgb('#abcdef');
    expect(result).toEqual({ r: 171, g: 205, b: 239 });
  });

  test('should handle uppercase hex codes', () => {
    const result = hexToRgb('#ABCDEF');
    expect(result).toEqual({ r: 171, g: 205, b: 239 });
  });

  test('should handle invalid hex codes and return default RGB values', () => {
    const result = hexToRgb('#invalid');
    expect(result).toEqual({ r: 0, g: 0, b: 0 });
  });
});

describe('rgbToHsv function', () => {
    test('should convert RGB to HSV', () => {
      const testCases = [
        { rgb: { r: 255, g: 0, b: 0 }, expected: { h: 0, s: 100, v: 100 } },
        { rgb: { r: 0, g: 255, b: 0 }, expected: { h: 120, s: 100, v: 100 } },
        { rgb: { r: 0, g: 0, b: 255 }, expected: { h: 240, s: 100, v: 100 } },
        { rgb: { r: 255, g: 255, b: 255 }, expected: { h: 0, s: 0, v: 100 } },
        { rgb: { r: 128, g: 128, b: 0 }, expected: { h: 60, s: 100, v: 50.19607843137255 } },
      ];

      testCases.forEach(({ rgb, expected }) => {
        const result = rgbToHsv(rgb);
        expect(result).toEqual(expected);
      });
    });

    test('should handle black (RGB 0, 0, 0) and return HSV 0, 0, 0', () => {
      const result = rgbToHsv({ r: 0, g: 0, b: 0 });
      expect(result).toEqual({ h: 0, s: 0, v: 0 });
    });
  });
