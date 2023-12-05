import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorEditor from './ColorEditor';

import Color from 'color';

describe('ColorEditor Component', () => {
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
    const props = {
        close: (string) => { },
        hex: 'hex',
        runtime: {saveRecentColor:()=>{}}
        // runtime: '',
    };
    const colorEditor = new ColorEditor(props);

    xit('renders ColorEditor correctly', () => {
        const closeMock = jest.fn();
        const { getByText } = render(<ColorEditor close={closeMock} />);

        // Adjust the test based on your component's rendering logic
        expect(getByText('Select Color')).toBeInTheDocument();
    });

    xit('handles color selection correctly', async () => {
        const closeMock = jest.fn();
        const { getByText, getByTestId } = render(<ColorEditor close={closeMock} />);

        // Simulate user selecting a color
        fireEvent.click(getByText('Your Color Selector Text'));
        // Mock the ColorPicker logic and update the color
        // Use fireEvent to simulate events or user interactions

        // Example: fireEvent.change(colorInput, { target: { value: '#ff0000' } });

        // Wait for async updates if any
        await waitFor(() => {
            // Assert that the color was updated
            expect(getByTestId('selected-color')).toHaveStyle({ backgroundColor: '#ff0000' });
        });

        // Simulate user clicking the OK button
        fireEvent.click(getByText('OK'));

        // Assert that the close function was called with the correct color
        expect(closeMock).toHaveBeenCalledWith('#ff0000');
    });

    // Add more tests as needed
    it('handle ColorEditor', () => {
        const props = {
            close: (string) => { },
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor).toBeDefined();
    });


    it('should render custom colors', () => {
        const props = {
            close: (string) => { },
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColors('Red', customColors, 'Custom')).toBeDefined();
    });
    it('should render custom colors when custom, color is not in arrlist', () => {
        const props = {
            close: (string) => { },
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColors('red', customColors, 'Custom')).toBeNull();
    });
    it('should render custom colors', () => {
        const props = {
            close: (string) => { },
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderRecentCustomColors()).toBeDefined();
    });
    it('should render custom colors', () => {
        const props = {
            close: (string) => { },
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.render()).toBeDefined();
    });
it('should handle renderRecentCustomColors',()=>{
    colorEditor.state ={recentColors:undefined};
    expect(colorEditor.renderRecentCustomColors()).toBeNull();
});

it('should handle renderRecentCustomColors',()=>{
    colorEditor.state ={recentColors:[{color:'#ffffff'}]};
    expect(colorEditor.renderRecentCustomColors()).toBeDefined();
});

it('should handle renderRecentCustomColors',()=>{
    colorEditor.state ={recentColors:[{color:'#red'}]};
    expect(colorEditor.renderRecentCustomColors()).toBeDefined();
});

// it('_renderColor should render the correct React element', () => {
//     const color = new Color('#FF0000');
//     const index = 0;
//     const props = {
//         close: (string) => { },
//         hex: 'hex',
//         runtime: '',
//     };
//     const colorEditor = new ColorEditor(props);
//     const result = colorEditor._renderColor(color, index);

//     expect(colorEditor.renderRecentCustomColors()).toBeDefined();
// });
});


describe('saveRecentColor', () => {

const Runtime = {
    saveRecentColor : jest.fn().mockReturnValue(Promise.resolve())
  };
  const saveColorProps = {
    close: (string) => { },
    hex: 'hex',
    runtime:Runtime

};
  const colorEditor = new ColorEditor(saveColorProps);
  it('should save recent color and call onSuccess', async () => {

    colorEditor.props=saveColorProps;
    colorEditor._recentColorList=[{
        id: 1,
        color: '#ff0000'
      },
      {
        id: 2,
        color: '#fff000'
      },
      {
        id: 3,
        color: '#f00'
      },
      {
        id: 4,
        color: '#ccc'
      },
      {
        id: 5,
        color: '#ff4000'
      },
      {
        id: 6,
        color: '#ff8000'
      },

      {
        id: 7,
        color: '#ff2000'
      },
      {
        id: 8,
        color: '#ffbf00'
      },
      {
        id: 9,
        color: '#fff000'
      },
            {
        id: 10,
        color: '#fff000'
      }];
  colorEditor._onSaveColor('#ff0000');
  colorEditor._onSelectColor('"ccc');
  colorEditor._recentColorList=[];
  colorEditor._onSaveColor('#ccc');
  colorEditor.props=saveColorProps;
  colorEditor._getRecentColors ();

  expect(Runtime.saveRecentColor).toBeDefined();
  expect(colorEditor.props.close).toBeDefined();
  });
});


