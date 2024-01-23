import React, { useCallback, useMemo } from 'react';
import {
  clamp,
  DEFAULT_COLOR,
  DEFAULT_COLORS,
  getHueCoordinates,
  getSaturationCoordinates,
  hexToRgb,
  isValidHexaCode,
  parseColor,
  rgbToHsv
} from '../Utils';
import './ColorPicker.css';
import { FreeSelector, PredefinedSelector } from './Options';
import { ColorHSV } from '../Interfaces/Color';

export enum ColorPickerVariant {
  Predefined = 'predefined',
  Free = 'free'
}

interface ColorPickerProps {
  color: string;
  colors: Array<string>;
  onChange(hsv: ColorHSV): void;
  variant: ColorPickerVariant;
  hsv: ColorHSV
}

export const ColorPicker = (props: ColorPickerProps) => {
  const { color, colors, onChange, variant, hsv } = props;

  const parsedColor = useMemo(() => parseColor(hsv), [hsv]);
  const satCoords = useMemo(() => getSaturationCoordinates(hsv), [
    hsv
  ]);
  const hueCoords = useMemo(() => getHueCoordinates(hsv), [
    hsv
  ]);

  const handleHexChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let val = event.target.value;
      if (val?.slice(0, 1) !== '#') {
        val = '#' + val;
      }
      if(isValidHexaCode(val)){
      onChange(rgbToHsv(hexToRgb(val)));
      }
    },
    [onChange]
  );

  // const handleHexChange = useCallback(
  //   (event) => {
  //     var val = event.target.value;
  //     if (val?.slice(0, 1) !== "#") {
  //       val = "#" + val;
  //     }
  //     onChange(val);
  //   },
  //   [onChange]
  // );


  const handleRgbChange = useCallback(
    (component: 'r' | 'g' | 'b', value: string) => {
      const { r, g, b } = parsedColor.rgb;

      switch (component) {
        case 'r':
          onChange(rgbToHsv({ r: parseInt(value) || 0, g, b }));
          return;
        case 'g':
          onChange(rgbToHsv({ r, g: parseInt(value) || 0, b }));
          return;
        case 'b':
          onChange(rgbToHsv({ r, g, b: parseInt(value) || 0 }));
          return;
        default:
          return;
      }
    },
    [parsedColor, onChange]
  );



  const handleSaturationChange = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { width, height, left, top } = event.currentTarget.getBoundingClientRect();

      const x = clamp(event.clientX - left, 0, width);
      const y = clamp(event.clientY - top, 0, height);

      const s = (x / width) * 100;
      const v = 100 - (y / height) * 100;

      //const rgb = hsvToRgb({ h: parsedColor?.hsv.h, s, v });
      onChange({ h: parsedColor?.hsv.h, s, v });
    },
    [parsedColor, onChange]
  );

  const handleHueChange = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { width, left } = event.currentTarget.getBoundingClientRect();
      const x = clamp(event.clientX - left, 0, width);
      const h = Math.round((x / width) * 360);

      const hsv = { h, s: parsedColor?.hsv.s, v: parsedColor?.hsv.v };
      //const rgb = hsvToRgb(hsv);
      onChange(hsv);
    },
    [parsedColor, onChange]
  );

  const predefinedSelect = (color: string) => {
    const hsv = rgbToHsv(hexToRgb(color));
    onChange(hsv);
  };


  return (
    <div className="mocp cp-container">
      {variant === ColorPickerVariant.Predefined ? (
        <PredefinedSelector
          colors={colors}
          onSelect={predefinedSelect}
          parsedColor={parsedColor}
        />
      ) : (
        <FreeSelector
          hueCoords={hueCoords}
          onHueChange={handleHueChange}
          onSaturationChange={handleSaturationChange}
          parsedColor={parsedColor}
          satCoords={satCoords}
        />
      )}

{variant === ColorPickerVariant.Free &&

      <div  className="mocp cp-input-container">
        <div className="mocp cp-input-group">
          <div
            className="mocp cp-color-preview"
            style={{
              background: color
            }}
          />
          <div key={parsedColor?.hex}>
            <label className="mocp cp-input-label" htmlFor="cp-input-hex">
              Hex
            </label>
            <input
              className="mocp cp-hex-input"
              defaultValue={parsedColor?.hex}
              id="cp-input-hex"
              onChange={handleHexChange}
              placeholder="Hex"
            />
          </div>
        </div>

        <div className="mocp cp-input-group">
          <div>
            <label className="mocp cp-input-label" htmlFor="cp-input-r">
              R
            </label>
            <input
              className="mocp cp-rgb-input"
              id="cp-input-r"
              inputMode="numeric"
              onChange={(event) => handleRgbChange('r', event.target.value)}
              pattern="[0-9]*"
              placeholder="R"
              value={parsedColor.rgb.r}
            />
          </div>
          <div>
            <label className="mocp cp-input-label" htmlFor="cp-input-g">
              G
            </label>
            <input
              className="mocp cp-rgb-input"
              id="cp-input-g"
              inputMode="numeric"
              onChange={(event) => handleRgbChange('g', event.target.value)}
              pattern="[0-9]*"
              placeholder="G"
              value={parsedColor.rgb.g}
            />
          </div>
          <div>
            <label className="mocp cp-input-label" htmlFor="cp-input-b">
              B
            </label>
            <input
              className="mocp cp-rgb-input"
              id="cp-input-b"
              inputMode="numeric"
              onChange={(event) => handleRgbChange('b', event.target.value)}
              pattern="[0-9]*"
              placeholder="B"
              value={parsedColor.rgb.b}
            />
          </div>
        </div>
      </div>
}
    </div>
  );
};

ColorPicker.defaultProps = {
  color: DEFAULT_COLOR,
  colors: DEFAULT_COLORS,
  variant: ColorPickerVariant.Predefined
};
