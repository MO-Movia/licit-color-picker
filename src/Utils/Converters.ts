import { ColorHSV, ColorRGB } from '../Interfaces/Color';

export function rgbToHex(color: ColorRGB): string {
  const { r, g, b } = color;
  let hexR = r.toString(16);
  let hexG = g.toString(16);
  let hexB = b.toString(16);

  if (hexR.length === 1) hexR = '0' + hexR;
  if (hexG.length === 1) hexG = '0' + hexG;
  if (hexB.length === 1) hexB = '0' + hexB;

  return '#' + hexR + hexG + hexB;
}

export function hexToRgb(color: string): ColorRGB {
  let r = 0;
  let g = 0;
  let b = 0;

  // 3 digits
  if (color.length === 4) {
    r = Number('0x' + color[1] + color[1]);
    g = Number('0x' + color[2] + color[2]);
    b = Number('0x' + color[3] + color[3]);

    // 6 digits
  } else if (color.length === 7) {
    r = Number('0x' + color[1] + color[2]);
    g = Number('0x' + color[3] + color[4]);
    b = Number('0x' + color[5] + color[6]);
  }

  return {
    r,
    g,
    b
  };
}

export function rgbToHsv(color: ColorRGB): ColorHSV {
  let { r, g, b } = color;
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);

  let h;
if (d) {
  if (max === r) {
    h = (g - b) / d + (g < b ? 6 : 0);
  } else if (max === g) {
    h = 2 + (b - r) / d;
  } else {
    h = 4 + (r - g) / d;
  }
  h *= 60;
} else {
  h = 0;
}

  const s = max ? (d / max) * 100 : 0;
  const v = max * 100;

  return { h, s, v };
}

export function hsvToRgb(color: ColorHSV): ColorRGB {
  let { h, s, v } = color;
  h /= 1;
  s /= 100;
  v /= 100;

  const i = ~~(h / 60);
  const f = h / 60 - i;
  const p = v * (1 - s);
  const q = v * (1 - s * f);
  const t = v * (1 - s * (1 - f));
  const index = i % 6;

  const r = Math.round([v, q, p, p, t, v][index] * 255);
  const g = Math.round([t, v, v, q, p, p][index] * 255);
  const b = Math.round([p, p, t, v, v, q][index] * 255);

  return {
    r,
    g,
    b
  };
}
