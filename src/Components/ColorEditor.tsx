import Color from "color";
import * as React from "react";

import clamp from "./clamp";

import "./czi-color-editor.css";
import ColorPicker, { ColorPickerVariant } from "./ColorPicker";

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
  console.log('colorsgrey', colors)

  return colors;
}

const customColors = [
  { key: "color1", value: "#E53935" },
  { key: "color2", value: "#FFB300" },
  { key: "color3", value: "#FFF176" },
  { key: "color4", value: "#81C784" },
  { key: "color5", value: "#2E7D32" },
  { key: "color6", value: "#03A9F4" },
  { key: "color7", value: "#008080" },
  { key: "color8", value: "#ff00ff" },
  { key: "color9", value: "#512DA8" },
];

class ColorEditor extends React.PureComponent<any, any>{
  props: {
    close: (string) => void;
    hex?: string;
  };


  renderCustomColor() {
    const customColorElements = customColors.map((colorData, index) => {
      const style = { backgroundColor: colorData.value };
      return (
        <button
          className="czi-color-editor-cell"
          key={`custom-color-${index}`}
          onClick={() => this._onSelectColor(colorData.value)}
          style={style}
        />
      );
    });

    return customColorElements;
  }


  renderCustomColorsWith10PercentOpacity() {
    const customColorElementsWith10PercentOpacity = customColors.map((colorData, index) => {
      const style = { backgroundColor: `${colorData.value}1A` }; // 1A adds 10% opacity
      return (
        <button
          className="czi-color-editor-cell"
          key={`custom-color-opacity-10-${index}`}
          onClick={() => this._onSelectColor(`${colorData.value}`)}
          style={style}
        />
      );
    });

    return customColorElementsWith10PercentOpacity;
  }
  renderCustomColorsWith20PercentOpacity() {
    const customColorElementsWith20PercentOpacity = customColors.map((colorData, index) => {
      const style = { backgroundColor: `${colorData.value}33` }; // 33 adds 20% opacity
      return (
        <button
          className="czi-color-editor-cell"
          key={`custom-color-opacity-20-${index}`}
          onClick={() => this._onSelectColor(`${colorData.value}`)}
          style={style}
        />
      );
    });

    return customColorElementsWith20PercentOpacity;
  }

  renderCustomColorsWith30PercentOpacity() {
    const customColorElementsWith30PercentOpacity = customColors.map((colorData, index) => {
      const style = { backgroundColor: `${colorData.value}4D` }; // 4D adds 30% opacity
      return (
        <button
          className="czi-color-editor-cell"
          key={`custom-color-opacity-30-${index}`}
          onClick={() => this._onSelectColor(`${colorData.value}`)}
          style={style}
        />
      );
    });

    return customColorElementsWith30PercentOpacity;
  }

  renderCustomColorsWith40PercentOpacity() {
    const customColorElementsWith40PercentOpacity = customColors.map((colorData, index) => {
      const style = { backgroundColor: `${colorData.value}66` }; // 66 adds 40% opacity
      return (
        <button
          className="czi-color-editor-cell"
          key={`custom-color-opacity-40-${index}`}
          onClick={() => this._onSelectColor(`${colorData.value}`)}
          style={style}
        />
      );
    });

    return customColorElementsWith40PercentOpacity;
  }

  renderCustomColorsWith50PercentOpacity() {
    const customColorElementsWith50PercentOpacity = customColors.map((colorData, index) => {
      const style = { backgroundColor: `${colorData.value}80` }; // 80 adds 50% opacity
      return (
        <button
          className="czi-color-editor-cell"
          key={`custom-color-opacity-50-${index}`}
          onClick={() => this._onSelectColor(`${colorData.value}`)}
          style={style}
        />
      );
    });

    return customColorElementsWith50PercentOpacity;
  }

  renderCustomColorsWith60PercentOpacity() {
    const customColorElementsWith60PercentOpacity = customColors.map((colorData, index) => {
      const style = { backgroundColor: `${colorData.value}99` };
      return (
        <button
          className="czi-color-editor-cell"
          key={`custom-color-opacity-60-${index}`}
          onClick={() => this._onSelectColor(`${colorData.value}`)}
          style={style}
        />
      );
    });

    return customColorElementsWith60PercentOpacity;
  }

  renderCustomColorsWith70PercentOpacity() {
    const customColorElementsWith70PercentOpacity = customColors.map((colorData, index) => {
      const style = { backgroundColor: `${colorData.value}B3` };
      return (
        <button
          className="czi-color-editor-cell"
          key={`custom-color-opacity-70-${index}`}
          onClick={() => this._onSelectColor(`${colorData.value}`)}
          style={style}
        />
      );
    });

    return customColorElementsWith70PercentOpacity;
  }

  renderCustomColorsWith80PercentOpacity() {
    const customColorElementsWith80PercentOpacity = customColors.map((colorData, index) => {
      const style = { backgroundColor: `${colorData.value}CC` };
      return (
        <button
          className="czi-color-editor-cell"
          key={`custom-color-opacity-80-${index}`}
          onClick={() => this._onSelectColor(`${colorData.value}`)}
          style={style}
        />
      );
    });

    return customColorElementsWith80PercentOpacity;
  }


  renderCustomColorsWith90PercentOpacity() {
    const customColorElementsWith90PercentOpacity = customColors.map((colorData, index) => {
      const style = { backgroundColor: `${colorData.value}E6` };
      return (
        <button
          className="czi-color-editor-cell"
          key={`custom-color-opacity-90-${index}`}
          onClick={() => this._onSelectColor(`${colorData.value}`)}
          style={style}
        />
      );
    });

    return customColorElementsWith90PercentOpacity;
  }




  constructor(props) {
    super(props);

    this.state = {
      color: '#ffffff',
      showFirst: true,
    };
  }

  render() {
    const showFirst = this.state.showFirst;
    const color = this.state.color;
    const renderColor = this._renderColor;
    const selectedColor = this.props.hex;

    const handleChange = (color) => {
      console.log("colorr", color);
      this.setState({ color });
    };


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
              {this.renderCustomColor()}
            </div>
            <div className="czi-color-editor-section">
              {this.renderCustomColorsWith10PercentOpacity()}
            </div>
            <div className="czi-color-editor-section">
              {this.renderCustomColorsWith20PercentOpacity()}
            </div>
            <div className="czi-color-editor-section">
              {this.renderCustomColorsWith30PercentOpacity()}
            </div>
            <div className="czi-color-editor-section">
              {this.renderCustomColorsWith40PercentOpacity()}
            </div>
            <div className="czi-color-editor-section">
              {this.renderCustomColorsWith50PercentOpacity()}
            </div>
            <div className="czi-color-editor-section">
              {this.renderCustomColorsWith60PercentOpacity()}
            </div>
            <div className="czi-color-editor-section">
              {this.renderCustomColorsWith70PercentOpacity()}
            </div>
            <div className="czi-color-editor-section">
              {this.renderCustomColorsWith80PercentOpacity()}
            </div>
            <div className="czi-color-editor-section">
              {this.renderCustomColorsWith90PercentOpacity()}
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
              <div className="btn-ok">
                <button className="cancel-btn" onClick={() => this._onSelectColor(null)}>
                  Cancel
                </button>
                <button className="ok-btn" onClick={() => this._onSelectColor(color)}>
                  Ok
                </button>
              </div>


            </div>

          </div>
        }



      </div>
    );

  }

  _renderColor = (color: Color, index: number): React.ReactElement => {
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
    console.log("clrrr", hex);
    this.props.close(hex);
  };
}
export default ColorEditor;
