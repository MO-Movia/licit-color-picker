import Color from 'color';
import * as React from 'react';
import './czi-color-editor.css';
import ColorPicker, { ColorPickerVariant } from './ColorPicker';
import { ColorHSV, MoreColor } from '../Interfaces/Color';
import { hexToRgb, hsvToRgb, rgbToHex, rgbToHsv } from '../Utils';


const HeaderColors = {
  'colors': [
    {
      'name': 'GreyScale',
      'shades': [
        { 'key': 'shade1', 'value': '#000000' },
        { 'key': 'shade2', 'value': '#444444' },
        { 'key': 'shade3', 'value': '#666666' },
        { 'key': 'shade4', 'value': '#999999' },
        { 'key': 'shade5', 'value': '#acacac' },
        { 'key': 'shade6', 'value': '#c8c8c8' },
        { 'key': 'shade7', 'value': '#e1e1e1' },
        { 'key': 'shade7', 'value': '#f3f3f3' },
        { 'key': 'shade8', 'value': '#ffffff' }
      ]
    },
    {
      'name': 'RandomColors',
      'shades': [
        { 'key': 'shade1', 'value': '#ff0000' },
        { 'key': 'shade2', 'value': '#ffc000' },
        { 'key': 'shade3', 'value': '#ffff00' },
        { 'key': 'shade4', 'value': '#92d050' },
        { 'key': 'shade4', 'value': '#00b050' },
        { 'key': 'shade5', 'value': '#00b0f0' },
        { 'key': 'shade6', 'value': '#0070c0' },
        { 'key': 'shade7', 'value': '#ff00ff' },
        { 'key': 'shade8', 'value': '#7030a0' }
      ]
    }
  ]
};

const customColors = {
  'colors': [
    {
      'name': 'Red',
      'shades': [
        { 'key': 'shade1', 'value': '#fcf0f0' },
        { 'key': 'shade2', 'value': '#fadcd9' },
        { 'key': 'shade3', 'value': '#fabbb4' },
        { 'key': 'shade4', 'value': '#fc9086' },
        { 'key': 'shade5', 'value': '#fa5343' },
        { 'key': 'shade6', 'value': '#d91f11' },
        { 'key': 'shade7', 'value': '#a1160a' },
        { 'key': 'shade8', 'value': '#75160c' }
      ]
    },
    {
      'name': 'lightYellow',
      'shades': [
        { 'key': 'shade1', 'value': '#fcf2eb' },
        { 'key': 'shade2', 'value': '#fcddc7' },
        { 'key': 'shade3', 'value': '#fcbc97' },
        { 'key': 'shade4', 'value': '#fc9162' },
        { 'key': 'shade5', 'value': '#e86427' },
        { 'key': 'shade6', 'value': '#bf4815' },
        { 'key': 'shade7', 'value': '#8f3415' },
        { 'key': 'shade8', 'value': '#632b17' }
      ]
    },
    {
      'name': 'Yellow',
      'shades': [
        { 'key': 'shade1', 'value': '#faf6cf' },
        { 'key': 'shade2', 'value': '#f7e379' },
        { 'key': 'shade3', 'value': '#f5c518' },
        { 'key': 'shade4', 'value': '#d9a514' },
        { 'key': 'shade5', 'value': '#b3870e' },
        { 'key': 'shade6', 'value': '#946613' },
        { 'key': 'shade7', 'value': '#70491c' },
        { 'key': 'shade8', 'value': '#54341f' }
      ]
    },
    {
      'name': 'lightGreen',
      'shades': [
        { 'key': 'shade1', 'value': '#ebf7da' },
        { 'key': 'shade2', 'value': '#d5f0b1' },
        { 'key': 'shade3', 'value': '#aad971' },
        { 'key': 'shade4', 'value': '#78bf39' },
        { 'key': 'shade5', 'value': '#52a31d' },
        { 'key': 'shade6', 'value': '#3c7d0e' },
        { 'key': 'shade7', 'value': '#2e5c0e' },
        { 'key': 'shade8', 'value': '#254211' }
      ]
    },
    {
      'name': 'Green',
      'shades': [
        { 'key': 'shade1', 'value': '#ebf7ed' },
        { 'key': 'shade2', 'value': '#c7ebd1' },
        { 'key': 'shade3', 'value': '#88dba8' },
        { 'key': 'shade4', 'value': '#43c478' },
        { 'key': 'shade5', 'value': '#16a163' },
        { 'key': 'shade6', 'value': '#077d55' },
        { 'key': 'shade7', 'value': '#075e45' },
        { 'key': 'shade8', 'value': '#094536' }
      ]
    },
    {
      'name': 'lightBlue',
      'shades': [
        { 'key': 'shade1', 'value': '#ebf3f7' },
        { 'key': 'shade2', 'value': '#c9e7f5' },
        { 'key': 'shade3', 'value': '#8bd3f7' },
        { 'key': 'shade4', 'value': '#48b8f0' },
        { 'key': 'shade5', 'value': '#1195d6' },
        { 'key': 'shade6', 'value': '#0073ba' },
        { 'key': 'shade7', 'value': '#08548a' },
        { 'key': 'shade8', 'value': '#0e3d66' }
      ]
    },
    {
      'name': 'Blue',
      'shades': [
        { 'key': 'shade1', 'value': '#f0f4fa' },
        { 'key': 'shade2', 'value': '#d5e4fa' },
        { 'key': 'shade3', 'value': '#adccf7' },
        { 'key': 'shade4', 'value': '#75b1ff' },
        { 'key': 'shade5', 'value': '#3d8df5' },
        { 'key': 'shade6', 'value': '#186ade' },
        { 'key': 'shade7', 'value': '#0d4ea6' },
        { 'key': 'shade8', 'value': '#103a75' }
      ]
    },
    {
      'name': 'Pink',
      'shades': [
        { 'key': 'shade1', 'value': '#fcf0f8' },
        { 'key': 'shade2', 'value': '#f7daed' },
        { 'key': 'shade3', 'value': '#f7b7e2' },
        { 'key': 'shade4', 'value': '#fa87d4' },
        { 'key': 'shade5', 'value': '#ed4cb7' },
        { 'key': 'shade6', 'value': '#cc1d92' },
        { 'key': 'shade7', 'value': '#961574' },
        { 'key': 'shade8', 'value': '#6b155a' }
      ]
    },
    {
      'name': 'Purple',
      'shades': [
        { 'key': 'shade1', 'value': '#f7f2fc' },
        { 'key': 'shade2', 'value': '#eadcfc' },
        { 'key': 'shade3', 'value': '#dabefa' },
        { 'key': 'shade4', 'value': '#c89afc' },
        { 'key': 'shade5', 'value': '#ac71f0' },
        { 'key': 'shade6', 'value': '#8f49de' },
        { 'key': 'shade7', 'value': '#6b30ab' },
        { 'key': 'shade8', 'value': '#4c277d' }
      ]
    }
  ]
};

const colorNames = customColors.colors.map(color => color.name);
const headerColorNames = HeaderColors.colors.map(color => color.name);


class ColorEditor extends React.PureComponent<any, any>{
  props: {
    close: (string) => void;
    hex?: string;
    runtime?: any;
  };

  _recentColorList: MoreColor[];

  renderCustomColors(colorName, arrList, TypeName) {
    const colorData = arrList.colors.find((color) => color.name === colorName);
    if (!colorData) {
      return null;
    }
    const colorButtons = colorData.shades.map((shade, shadeIndex) => {
      const style = {
        backgroundColor: shade.value,
        border: shade.value === '#ffffff' ? '1px solid #eeeff1' : 'none'
      };

      if (TypeName == 'Custom') {
        return (
          <tr><td
            className="mocp czi-color-editor-cell"
            key={`custom-color-${shadeIndex}`}
            onClick={() => this._onSelectColor(shade.value)}
            style={style}
          ></td></tr>
        );
      }
      else {
        return (
          <td
            className="mocp czi-color-editor-cell"
            key={`custom-color-${shadeIndex}`}
            onClick={() => this._onSelectColor(shade.value)}
            style={style}
          ></td>
        );
      }



    });
    if (TypeName == 'Custom') {
      return (
        <tr><td className="mocp czi-color-editor-column">
          {colorButtons}
        </td></tr>
      );
    }
    else {
      return (
        <tr className="mocp czi-color-editor-column">
          {colorButtons}
        </tr>
      );
    }

  }

  renderCustomColorsTable = () => {
    return colorNames.map((colorName, index) => (
      <table className={`${index === 0 ? 'mocp customFirstColorTable' : 'mocp customColorTable'}`} key={colorName}>
        <tbody>{this.renderCustomColors(colorName, customColors, 'Custom')}</tbody>
      </table>
    ));
  };


  renderHeaderColorsTable = () => {
    return headerColorNames.map((colorName) => (
      <div className="headerColorDiv" key={colorName}>
        <table className="mocp randomColorTable">
          <tbody>
            {this.renderCustomColors(colorName, HeaderColors, 'Header')}
          </tbody>
        </table>
      </div>
    ));
  };

  renderRecentColors = () => {
    // this._getRecentColors();

    return (
      <div key={'recent_colors'}>
        <table className="mocp randomColorTable">
          <tbody>
            {this.renderRecentCustomColors()}
          </tbody>
        </table>
      </div>
    );
  };

  renderRecentCustomColors() {
    // const colorData = this._recentColorList;
    const { recentColors } = this.state;
    if (undefined === recentColors) {
      return null;
    }
    const colorButtons = recentColors.map((shade) => {
      const style = {
        backgroundColor: shade.color,
        border: shade.color === '#ffffff' ? '1px solid #eeeff1' : 'none'
      };
      return (
        <td
          className="mocp czi-color-editor-cell"
          key={`custom-color-${shade.id}`}
          onClick={() => this._onSelectColor(shade.color)}
          style={style}

        >
          <div className="mocp close-button-container">
            <div className="mocp close-button" onClick={(event) => this._onRemoverecent(event, shade.id)}><span className="close-button-x" >x</span></div>
          </div>
        </td>
      );
    });

    return (
      <tr className="mocp czi-color-editor-column">
        {colorButtons}
      </tr>
    );

  }

  constructor(props) {
    super(props);

    const defaultColor = '#000000';

    this.state = {
      color: defaultColor,
      showFirst: true,
      recentColors: [],
      hsv: rgbToHsv(hexToRgb(defaultColor))
    };
  }

  async componentDidMount() {
    try {
      const response = await this._getRecentColors();

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const showFirst = this.state.showFirst;
    const color = this.state.color;
    const hsv = this.state.hsv;
    const handleChange = (hsv: ColorHSV) => {
      const color = rgbToHex(hsvToRgb(hsv));
      this.setState({ color, hsv });
    };


    return (
      <div className="mocp czi-color-editor">

        {showFirst &&
          <div >
            <div className="mocp czi-color-editor-section">
              <div className="mocp czi-color-editor-color-transparent czi-color-head">
                Select Color
              </div>
            </div>
            <div className="mocp">
              {this.renderHeaderColorsTable()}
            </div>

            <div className="mocp flexCustomArea">
              {this.renderCustomColorsTable()}
            </div>

            <hr className="mocp"></hr>
            <div className="mocp czi-color-editor-section czi-color-head">
              <div className="mocp czi-color-editor-color-transparent">
                Recent Colors
              </div>
            </div>
            <div className="mocp czi-color-recent">
              {this.renderRecentColors()}
            </div>
            <hr className="mocp"></hr>


            <div className="mocp czi-color-editor-section czi-color-more">
              <div className="mocp czi-color-editor-color-transparent" onClick={() => this.setState({ showFirst: false })}>
                More Colors...
              </div>
            </div>

          </div>
        }



        {!showFirst &&
          <div className="mocp modal">
            <div className="mocp modal-content">
              <ColorPicker
                color={color}
                hsv={hsv}
                onChange={handleChange}
                variant={ColorPickerVariant.Predefined}
              />
              <ColorPicker
                color={color}
                hsv={hsv}
                onChange={handleChange}
                variant={ColorPickerVariant.Free}
              />
              <div className="mocp btn-ok">
                <button className="mocp cancel-btn" onClick={() => this._onSelectColor(null)}>
                  Cancel
                </button>
                <button className="mocp ok-btn" onClick={() => this._onSaveColor(color)}>
                  OK
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
        className="mocp czi-color-editor-cell"
        key={`${hex}-${index}`}
        onClick={() => this._onSelectColor(hex)}
        style={style}
        value={hex}
      />
    );
  };

  _onSelectColor = (hex: string): void => {
    // let color: string
    // this.props.close(hex);
    this._onSuccess({ id: 1, color: hex });
    // this._saveRecentColor({ id: 1, color: hex });

  };

  _onRemoverecent = (event: any,id: null): void => {

    if (this.props.runtime) {
      const runtime = this.props.runtime;
      const { deleteRecentColorById } = runtime;
      if (deleteRecentColorById) {
        if (this._recentColorList) {
          const index = this._recentColorList.findIndex(c => c.id === id);
          if (index > -1) {
            this._recentColorList.splice(index, 1);
          }
          deleteRecentColorById(id);
        }
      }
    }
    event.stopPropagation();
    this._onSelectColor(null);
  };

  _onSaveColor = (hex: string): void => {
    this._saveRecentColor({ id: 1, color: hex });

  };


  _saveRecentColor = async (col: MoreColor): Promise<void> => {
    let _col: MoreColor;
    if (this.props.runtime) {
      const runtime = this.props.runtime;
      const { saveRecentColor } = runtime;
      if (saveRecentColor) {
        if (this._recentColorList && this._recentColorList.length > 0) {
          col.id = Math.max(...this._recentColorList.map(obj => obj.id)) + 1;
        } else {
          this._recentColorList = [];
        }
        this._recentColorList.push(col);
        if (this._recentColorList.length > 9) {
          const sortedArray = this._recentColorList.slice().sort((a: MoreColor, b: MoreColor) => b.id - a.id);
          this._recentColorList = sortedArray.slice(0, 10);
        }
        _col = await saveRecentColor(this._recentColorList);
      }
    }
    this._onSuccess(col);
  };

  _onSuccess = (col: MoreColor): void => {

    this.props.close(col.color);
  };

  _getRecentColors = async (): Promise<void> => {

    if (this.props.runtime) {
      const runtime = this.props.runtime;
      const { getRecentColors } = runtime;
      if (getRecentColors) {
        this._recentColorList = await getRecentColors();
        this._recentColorList = this._recentColorList.slice().sort((a: MoreColor, b: MoreColor) => b.id - a.id);
        this.setState({ recentColors: this._recentColorList });

      }
    }

  };

}
export default ColorEditor;


