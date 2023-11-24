import React, { useCallback, useMemo, useState } from "react";
import {
  clamp,
  DEFAULT_COLOR,
  DEFAULT_COLORS,
  getHueCoordinates,
  getSaturationCoordinates,
  hsvToRgb,
  parseColor,
  rgbToHex
} from "../Utils";
import "./ColorPicker.css";
import { FreeSelector, PredefinedSelector } from "./Options";

export enum ColorPickerVariant {
  Predefined = "predefined",
  Free = "free"
}

interface ColorPickerProps {
  color: string;
  colors: Array<string>;
  onChange(color: string): void;
  variant: ColorPickerVariant;
}

export const ColorPicker = (props: ColorPickerProps) => {
  const { color, colors, onChange, variant } = props;
  const [parsedColor, setParsedColor] = useState(parseColor(color));

  


  //const parsedColor = useMemo(() => parseColor(color), [color]);
  const satCoords = useMemo(() => getSaturationCoordinates(parsedColor), [
    parsedColor
  ]);
  const hueCoords = useMemo(() => getHueCoordinates(parsedColor), [
    parsedColor
  ]);



  const handleHexChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let val = event.target.value;
      if (val?.slice(0, 1) !== "#") {
        val = "#" + val;
      }
     // onChange(val);
      setParsedColor(parseColor(val));

    },
   [setParsedColor]
  // [setParsedColor(parseColor(''))]

  );



  const handleRgbChange = useCallback(
    (component: 'r' | 'g' | 'b', value: string) => {
      const { r, g, b } = parsedColor.rgb;
      switch (component) {
        case "r":
          setParsedColor(parseColor(rgbToHex({ r: parseInt(value) || 0, g, b })));
          return;
        case "g":
          setParsedColor(parseColor(rgbToHex({ r, g: parseInt(value) || 0, b })));
          return;
        case "b":
          setParsedColor(parseColor(rgbToHex({ r, g, b: parseInt(value) || 0 })));
          return;
        default:
          return;
      }
    },
    [parsedColor, setParsedColor]
  );


  const handleSaturationChange = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { width, height, left, top } = event.currentTarget.getBoundingClientRect();
      const x = clamp(event.clientX - left, 0, width);
      const y = clamp(event.clientY - top, 0, height);
      const s = (x / width) * 100;
      const v = 100 - (y / height) * 100;
      const rgb = hsvToRgb({ h: parsedColor?.hsv.h, s, v });
      setParsedColor(parseColor(rgbToHex(rgb)));
    },
    [parsedColor, setParsedColor]
  );


  const handleHueChange = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { width, left } = event.currentTarget.getBoundingClientRect();
      const x = clamp(event.clientX - left, 0, width);
      const h = Math.round((x / width) * 360);
      const hsv = { h, s: parsedColor?.hsv.s, v: parsedColor?.hsv.v };
      const rgb = hsvToRgb(hsv);
      const newHexColor = rgbToHex(rgb);
      setParsedColor(parseColor(newHexColor));
    },
    [parsedColor, setParsedColor]
  );


 


  return (
    <div className="mocp cp-container">
      {variant === ColorPickerVariant.Predefined ? (
        //circles for select
        <PredefinedSelector
        colors={colors}
        parsedColor={parsedColor}
        onSelect={(color: string) => setParsedColor(parseColor(color))}
      />
      ) : (
        // selection box
        <FreeSelector
          parsedColor={parsedColor}
          satCoords={satCoords}
          hueCoords={hueCoords}
          onSaturationChange={handleSaturationChange}
          onHueChange={handleHueChange}
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
          <div>
            <label className="mocp cp-input-label" htmlFor="cp-input-hex">
              Hex
            </label>
            <input
              id="cp-input-hex"
              className="mocp cp-hex-input"
              placeholder="Hex"
              value={parsedColor?.hex}
              onChange={handleHexChange}
            />
          </div>
        </div>

        <div className="mocp cp-input-group">
          <div>
            <label className="mocp cp-input-label" htmlFor="cp-input-r">
              R
            </label>
            <input
              id="cp-input-r"
              className="mocp cp-rgb-input"
              placeholder="R"
              value={parsedColor.rgb.r}
              onChange={(event) => handleRgbChange("r", event.target.value)}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>
          <div>
            <label className="mocp cp-input-label" htmlFor="cp-input-g">
              G
            </label>
            <input
              id="cp-input-g"
              className="mocp cp-rgb-input"
              placeholder="G"
              value={parsedColor.rgb.g}
              onChange={(event) => handleRgbChange("g", event.target.value)}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </div>
          <div>
            <label className="mocp cp-input-label" htmlFor="cp-input-b">
              B
            </label>
            <input
              id="cp-input-b"
              className="mocp cp-rgb-input"
              placeholder="B"
              value={parsedColor.rgb.b}
              onChange={(event) => handleRgbChange("b", event.target.value)}
              inputMode="numeric"
              pattern="[0-9]*"
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
  onChange: (color: string) => { },
  variant: ColorPickerVariant.Predefined
};

export default ColorPicker;