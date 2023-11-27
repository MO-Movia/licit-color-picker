import { Color, ColorHSV, ColorRGB } from '../Interfaces/Color';
import { hsvToRgb, rgbToHex } from './Converters';

export function getRgb(color: string): ColorRGB {
  const matches = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/i.exec(color);
  const r = Number(matches?.[1] ?? 0);
  const g = Number(matches?.[2] ?? 0);
  const b = Number(matches?.[3] ?? 0);

  return {
    r,
    g,
    b,
  };
}

export function parseColor(hsv: ColorHSV): Color {
  const rgb = hsvToRgb(hsv);
  const hex = rgbToHex(rgb);

  return {
    hex,
    rgb,
    hsv,
  };
}

export function getSaturationCoordinates(hsv: ColorHSV): [number, number] {
  const { s, v } = hsv;

  const x = s;
  const y = 100 - v;

  return [x, y];
}

export function getHueCoordinates(hsv: ColorHSV): number {
  const { h } = hsv;

  const x = (h / 360) * 100;

  return x;
}

export function clamp(number: number, min: number, max: number): number {
  if (!max) {
    return Math.max(number, min) === min ? number : min;
  } else if (Math.min(number, min) === number) {
    return min;
  } else if (Math.max(number, max) === number) {
    return max;
  }
  return number;
}

export function isValidHexaCode(value: string): boolean {
  const Reg_Exp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
  return Reg_Exp.test(value);
}
