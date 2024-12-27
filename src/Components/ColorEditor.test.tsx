import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ColorEditor, ColorEditorState } from './ColorEditor';

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

    const HeaderColors = {
        colors: [
            {
                name: 'GreyScale',
                shades: [
                    { key: 'shade1', value: '#000000' },
                    { key: 'shade2', value: '#444444' },
                    { key: 'shade3', value: '#666666' },
                    { key: 'shade4', value: '#999999' },
                    { key: 'shade5', value: '#acacac' },
                    { key: 'shade6', value: '#c8c8c8' },
                    { key: 'shade7', value: '#e1e1e1' },
                    { key: 'shade7', value: '#f3f3f3' },
                    { key: 'shade8', value: '#ffffff' },
                ],
            },
            {
                name: 'RandomColors',
                shades: [
                    { key: 'shade1', value: '#ff0000' },
                    { key: 'shade2', value: '#ffc000' },
                    { key: 'shade3', value: '#ffff00' },
                    { key: 'shade4', value: '#92d050' },
                    { key: 'shade4', value: '#00b050' },
                    { key: 'shade5', value: '#00b0f0' },
                    { key: 'shade6', value: '#0070c0' },
                    { key: 'shade7', value: '#ff00ff' },
                    { key: 'shade8', value: '#7030a0' },
                ],
            },
        ],
    };

    const HeaderColorsEmpty = {
        colors: [

        ],
    };

    const props = {
        hex: 'hex',
    };
    const colorEditor = new ColorEditor(props);

    it('renders ColorEditor correctly', () => {
        const closeMock = jest.fn();
        const { getByText } = render(<ColorEditor close={closeMock} />);
        expect(getByText('Select Color')).toBeInTheDocument();
    });

    it('handle ColorEditor', () => {
        const props = {
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor).toBeDefined();
    });


    it('should render custom colors', () => {
        const props = {
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColors('Red', customColors, 'Custom')).toBeDefined();
    });
    it('should render custom colors when custom, color is not in arrlist', () => {
        const props = {
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColors('red', customColors, 'Custom')).toBeNull();
    });
    it('should render custom colors', () => {
        const props = {
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderRecentCustomColors()).toBeDefined();
    });
    it('should render custom colors', () => {
        const props = {
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.render()).toBeDefined();
    });
    it('should handle renderRecentCustomColors', () => {
        colorEditor.state = {
          recentColors: undefined,
        } as unknown as ColorEditorState;
        expect(colorEditor.renderRecentCustomColors()).toBeNull();
    });

    it('should handle renderRecentCustomColors', () => {
        colorEditor.state = {
          recentColors: [{ color: '#ffffff' }],
        } as unknown as ColorEditorState;
        expect(colorEditor.renderRecentCustomColors()).toBeDefined();
    });

    it('should handle renderRecentCustomColors', () => {
        colorEditor.state = {
          recentColors: [{ color: '#red' }],
        } as unknown as ColorEditorState;
        expect(colorEditor.renderRecentCustomColors()).toBeDefined();
    });

    it('should render custom colors', () => {
        const props = {
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColorsHeader('GreyScale', HeaderColors)).toBeDefined();
    });

    it('should render custom colors', () => {
        const props = {
            Textcolor: '#75160c',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColors('Red', customColors, 'Custom')).toBeDefined();
    });

    it('should render custom colors', () => {
        const props = {
            Textcolor: '#ffffff',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColorsHeader('GreyScale', HeaderColors)).toBeDefined();
    });

    it('should render custom colors', () => {
        const props = {
            Textcolor: '#ffffff',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColors('GreyScale', HeaderColors, 'Custom')).toBeDefined();
    });

    it('should render custom colors', () => {
        const props = {
            Textcolor: '#7030a0',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColors('RandomColors', HeaderColors, 'Custom')).toBeDefined();
    });

    it('should render header colors', () => {
        const props = {
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColorsHeader('GreyScale', HeaderColorsEmpty)).toBeDefined();
    });

    it('should render custom colors', () => {
        const props = {
            Textcolor: '#7030a0',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor.renderCustomColors('RandomColors', HeaderColors, 'Empty')).toBeDefined();
    });

    it('should handle renderRecentCustomColors', () => {

        const props = {
            Textcolor: '#ffffff',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);

        colorEditor.state = { recentColors: [{ color: '#ffffff' }] } as unknown as ColorEditorState;
        expect(colorEditor.renderRecentCustomColors()).toBeDefined();
    });



    it('should handle _onSelectColor', () => {
        const props = {
            hex: '#ffffff',
            runtime: '',
            close: jest.fn()
        };
        const colorEditor = new ColorEditor(props);
        expect(colorEditor._onSelectColor('#ffffff')).toBeUndefined();
    });

    it('should handle error in componentDidMount', async () => {
        const error = new Error('Mock error');
        const mockGetRecentColors = jest.fn().mockRejectedValue(error);
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => undefined);
        const props = {
            hex: '',
            runtime: ''
        };
        const colorEditor = new ColorEditor(props);
        colorEditor._getRecentColors = mockGetRecentColors;
        await colorEditor.componentDidMount();
        expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching data:', error);
        consoleErrorSpy.mockRestore();
    });



    it('should handle _onSaveColor', () => {
        const saveRecentColorMock = jest.fn().mockResolvedValue(true);
        const runtimeMock = {
            saveRecentColor: saveRecentColorMock
        };

        const props = {
            hex: '#ffffff',
            runtime: runtimeMock,
            close: jest.fn()
        };
        const colorEditor = new ColorEditor(props);
        colorEditor._recentColorList = [{ id: 1, color: '#ffffff' },
        { id: 1, color: '#ffffff' }, { id: 1, color: '#fff0ff' },
        { id: 1, color: '#ffffff' }, { id: 1, color: '#ffffff' },
        { id: 1, color: '#ffffff' }, { id: 1, color: '#f5ff0f' },
        { id: 1, color: '#ffffff' }, { id: 1, color: '#ffffff' },
        { id: 1, color: '#ffffff' }, { id: 1, color: '#fff8ff' },
        { id: 1, color: '#ffffff' }, { id: 1, color: '#ffff7f' }];
        expect(colorEditor._onSaveColor('#ffffff')).toBeUndefined();
    });

    it('should handle _onSaveColor empty', () => {
        const saveRecentColorMock = jest.fn().mockResolvedValue(true);
        const runtimeMock = {
            saveRecentColor: saveRecentColorMock
        };
        const props = {
            hex: '#ffffff',
            runtime: runtimeMock,
            close: jest.fn()
        };
        const colorEditor = new ColorEditor(props);
        colorEditor._recentColorList = [];
        expect(colorEditor._onSaveColor('#ffffff')).toBeUndefined();
    });

    it('should fetch recent colors and update state', async () => {
        const getRecentColorsMock = jest.fn().mockResolvedValue([
            { id: 1, color: '#ffffff' },
            { id: 2, color: '#000000' },
        ]);
        const runtimeMock = {
            getRecentColors: getRecentColorsMock
        };

        const props = {
            hex: '#ffffff',
            runtime: runtimeMock,
            close: jest.fn()
        };

        const colorEditor = new ColorEditor(props);
        await colorEditor._getRecentColors();
        expect(getRecentColorsMock).toHaveBeenCalled();
    });

    it('should handle _onRemoveRecent', () => {
        const deleteRecentColorByIdMock = jest.fn().mockResolvedValue(true);
        const runtimeMock = {
            deleteRecentColorById: deleteRecentColorByIdMock
        };

        const props = {
            hex: '#ffffff',
            runtime: runtimeMock,
            close: jest.fn()
        };
        const id = -1;

        const colorEditor = new ColorEditor(props);
        const recentColor = { id: 1, color: '#ffffff' };
        colorEditor._recentColorList = [recentColor];
        const mockEvent = { stopPropagation: jest.fn() } as unknown as React.MouseEvent;
        colorEditor._onRemoverecent(mockEvent, id);
        expect(deleteRecentColorByIdMock).toHaveBeenCalledWith(id);

    });

    it('should render custom colors', () => {
        const props = {
            hex: 'hex',
            runtime: '',
        };
        const colorEditor = new ColorEditor(props);

        const mockState = {
            recentColors: [],
            color: '#ff0000',
            hsv: { h: 0, s: 100, v: 100 },
            showFirst : true
          };

        colorEditor.state = mockState;
        expect(colorEditor.render()).toBeDefined();
    });

    it('should render custom colors to false', () => {
        const props = {
            hex: 'hex',
            runtime: '',
        };

        const colorEditor = new ColorEditor(props);

        const mockState = {
            recentColors: [],
            color: '#ff0000',
            hsv: { h: 0, s: 100, v: 100 },
            showFirst : false
          };

        colorEditor.state = mockState;
        expect(colorEditor.render()).toBeDefined();
    });


});
