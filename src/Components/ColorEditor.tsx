import Color from 'color';
import * as React from 'react';

import clamp from './clamp';

import './czi-color-editor.css';
import ColorPicker, { ColorPickerVariant } from './ColorPicker';




function generateGreyColors(count: number): Array<Color> {
  let cc = 255;
  const interval = cc / count;
  const colors = [];
  while (cc > 0) {
    const color = Color({ r: cc, g: cc, b: cc });
    cc -= interval;
    cc = Math.floor(cc);
    colors.unshift(color);
  }
  return colors;
}

function generateRainbowColors(
  count: number,
  saturation: number,
  lightness: number
): Array<Color> {
  const colors = [];
  const interval = 360 / count;
  const ss = clamp(0, saturation, 100);
  const ll = clamp(0, lightness, 100);
  let hue = 0;
  while (hue < 360) {
    const hsl = `hsl(${hue},${ss}%,${ll}%)`;
    const color = Color(hsl);
    colors.unshift(color);
    hue += interval;
  }
  return colors;
}
class ColorEditor extends React.PureComponent {
  props: {
    close: (string) => void;
    hex?: string;
  };


  constructor(props) {
    super(props);

    this.state = {
      color: '#ffffff',
      showFirst: true,
    };
  }




  render() {
    const showFirst = (this.state as any).showFirst;
    const color = (this.state as any).color;

    
    const renderColor = this._renderColor;
    const selectedColor = this.props.hex;



    // function handleChange(color: string): void {
    //   throw new Error('Function not implemented.');
    // }

    const handleChange = (color) => {
      console.log('colorr', color)
      this.setState({ color });
    }





    return (
      <div className="czi-color-editor">

        {showFirst &&
          <div >
            <div className="czi-color-editor-section">
              <div
                className="czi-color-editor-color-transparent czi-color-head"
              >
                Select Color
              </div>
            </div>
            <div className="czi-color-editor-section">
              {generateGreyColors(10).map(renderColor)}
            </div>
            <div className="czi-color-editor-section">
              {generateRainbowColors(10, 90, 50).map(renderColor)}
            </div>
            <div className="czi-color-editor-section">
              {generateRainbowColors(30, 70, 70).map(renderColor)}
            </div>
            <div className="czi-color-editor-section">
              {generateRainbowColors(30, 90, 30).map(renderColor)}
            </div>
            <hr></hr>
            <div className="czi-color-editor-section czi-color-head">
              <div className="czi-color-editor-color-transparent">
                Recent Colors
              </div>
            </div>
            <div className="czi-color-recent"></div>
            <hr></hr>


            <div className="czi-color-editor-section czi-color-more">
              <div onClick={() => this.setState({ showFirst: false })} className="czi-color-editor-color-transparent">
                More Colors...
              </div>
            </div>

          </div>
        }



        {!showFirst &&
          <div className="modal">
            <div className="modal-content">
              <ColorPicker
                color={color}
                onChange={handleChange}
                variant={ColorPickerVariant.Predefined}
              />
              <ColorPicker
                color={color}
                onChange={handleChange}
                variant={ColorPickerVariant.Free}
              />

            </div>
          </div>
        }



      </div>
    );
  }

  _renderColor = (
    color: Color,
    index: number
  ): React.ReactElement => {
    const selectedColor = this.props.hex;
    const hex = color.hex().toLowerCase();
    const style = { backgroundColor: hex };
    const active = selectedColor && selectedColor.toLowerCase() === hex;
    return (
      <button
        className="czi-color-editor-cell"
        key={`${hex}-${index}`}
        onClick={() => this._onSelectColor(hex)}
        style={style}
        value={hex}

      />
    );
  };

  _onSelectColor = (hex: string): void => {
    console.log('clrrr', hex)
    this.props.close(hex);
  };

}
export default ColorEditor;
