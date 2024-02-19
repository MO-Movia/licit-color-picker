import { DEFAULT_COLOR, DEFAULT_COLORS } from './Constants';

describe('Constants', () => {
  test('DEFAULT_COLOR should be a string', () =>
    expect(typeof DEFAULT_COLOR).toBe('string'));
  });

  test('DEFAULT_COLORS should be an array', () => {
    expect(Array.isArray(DEFAULT_COLORS)).toBe(true);
  });

  test('DEFAULT_COLORS should have a specific length and values', () => {
    const expectedLength = 24;
    const expectedValues = [
      '#000000',
      '#424242',
      '#757575',
      '#bdbdbd',
      '#eeeeee',
      '#ffffff',
      '#b71c1c',
      '#e53935',
      '#e57373',
      '#1b5e20',
      '#43a047',
      '#81c784',
      '#0d47a1',
      '#1e88e5',
      '#64b5f6',
      '#f57f17',
      '#fdd835',
      '#fff176',
      '#4a148c',
      '#8e24aa',
      '#ba68c8',
      '#3e2723',
      '#6d4c41',
      '#a1887f',
    ];

    expect(DEFAULT_COLORS.length).toBe(expectedLength);
    expect(DEFAULT_COLORS).toEqual(expectedValues);
  });

