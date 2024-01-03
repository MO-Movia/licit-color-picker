import React, { MouseEventHandler } from 'react';
import { Color } from '../../Interfaces/Color';
import './FreeSelector.css';
import preventEventDefault from '../preventEventDefault';

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

      <div className="mocp cp-hue" onClick={onHueChange}
        onMouseDown={preventEventDefault}
        onMouseEnter={preventEventDefault}
        onMouseUp={preventEventDefault}
      >
        <div
          className="mocp cp-hue-indicator"
          style={{
            backgroundColor: parsedColor.hex,
            left: (hueCoords ?? 0) + '%'
          }}
        />
      </div>

      <div style={{ paddingTop: 8 }}>

        <div

          className="mocp cp-saturation"
          onClick={onSaturationChange}
          onMouseDown={preventEventDefault}
          onMouseEnter={preventEventDefault}
          onMouseUp={preventEventDefault}
          style={{
            backgroundColor: `hsl(${parsedColor.hsv.h}, 100%, 50%)`
          }}
        >
          <div
            className="mocp cp-saturation-indicator"
            style={{
              backgroundColor: parsedColor.hex,
              left: (satCoords?.[0] ?? 0) + '%',
              top: (satCoords?.[1] ?? 0) + '%'
            }}
          />
        </div>
      </div>

    </div>
  );
};
