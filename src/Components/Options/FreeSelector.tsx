import React, { MouseEventHandler } from "react";
import { Color } from "../../Interfaces/Color";
import "./FreeSelector.css";

interface FreeSelectorProps {
  parsedColor: Color;
  satCoords: Array<number>;
  hueCoords: number;
  onSaturationChange: MouseEventHandler;
  onHueChange: MouseEventHandler;
}

export const FreeSelector = (props: FreeSelectorProps) => {
  const {
    parsedColor,
    satCoords,
    hueCoords,
    onSaturationChange,
    onHueChange
  } = props;

  return (
    <div className="mocp cp-free-root">

        <div className="mocp cp-hue" onClick={onHueChange}>
          <div
            className="mocp cp-hue-indicator"
            style={{
              backgroundColor: parsedColor.hex,
              left: (hueCoords ?? 0) + "%"
            }}
            title={`Hue Coords: ${hueCoords}`}
          />

        </div>

      <div style={{ paddingTop: 8 }}>

        <div

          className="mocp cp-saturation"
          style={{
            backgroundColor: `hsl(${parsedColor.hsv.h}, 100%, 50%)`
          }}
          onClick={onSaturationChange}
        >
          <div
            className="mocp cp-saturation-indicator"
            style={{
              backgroundColor: parsedColor.hex,
              left: (satCoords?.[0] ?? 0) + "%",
              top: (satCoords?.[1] ?? 0) + "%"
            }}
          />
        </div>
      </div>

    </div>
  );
};
