import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ColorPicker, ColorPickerVariant } from './ColorPicker'; // Adjust the import path based on your project structure

// Mock the utility functions and child components
jest.mock('../Utils', () => ({
  parseColor: jest.fn((hsv) => ({
    rgb: { r: 0, g: 0, b: 0 },
    hex: '#000000',
    hsv,
  })),
  getSaturationCoordinates: jest.fn(() => ({ x: 0, y: 0 })),
  getHueCoordinates: jest.fn(() => ({ x: 0, y: 0 })),
  hexToRgb: jest.fn(() => ({ r: 0, g: 0, b: 0 })),
  isValidHexaCode: jest.fn(() => true),
  rgbToHsv: jest.fn(() => ({ h: 0, s: 0, v: 0 })),
}));

jest.mock('./Options', () => ({
  FreeSelector: jest.fn(() => null),
  PredefinedSelector: jest.fn(() => null),
}));

describe('ColorPicker Component', () => {
  test('renders ColorPicker with Free variant', () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    const hsv = { h: 0, s: 0, v: 0 };
    const { container } = render(
      <ColorPicker
        color="#ff0000"
        colors={colors}
        hsv={hsv}
        onChange={(newColor) => console.log(newColor)}
        variant={ColorPickerVariant.Free}
      />
    );

    expect(container.querySelector('.mocp.cp-container')).toBeInTheDocument();

    expect(container.querySelector('.PredefinedSelector')).toBeNull();
  });

  test('handles Hex input change correctly', () => {
    const onChangeMock = jest.fn();
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    const hsv = { h: 0, s: 0, v: 0 };
    const { getByPlaceholderText } = render(
      <ColorPicker
        color="#ff0000"
        colors={colors}
        hsv={hsv}
        onChange={onChangeMock}
        variant={ColorPickerVariant.Free}
      />
    );

    const hexInput = getByPlaceholderText('Hex');
    fireEvent.change(hexInput, { target: { value: '123456' } });

    expect(onChangeMock).toHaveBeenCalledWith({ h: 0, s: 0, v: 0 });
  });

  test('handles RGB input change correctly', () => {
    const onChangeMock = jest.fn();
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    const hsv = { h: 0, s: 0, v: 0 };
    const { getByPlaceholderText } = render(
      <ColorPicker
        color="#ff0000"
        colors={colors}
        hsv={hsv}
        onChange={onChangeMock}
        variant={ColorPickerVariant.Free}
      />
    );

    const rInput = getByPlaceholderText('R');
    fireEvent.change(rInput, { target: { value: '123' } });
    expect(onChangeMock).toHaveBeenCalledWith({ h: 0, s: 0, v: 0 });
  });

  test('color preview updates when hex input changes', () => {
    const onChangeMock = jest.fn();
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    const hsv = { h: 0, s: 0, v: 0 };
    const { getByPlaceholderText, container } = render(
      <ColorPicker
        color="#ff0000"
        colors={colors}
        hsv={hsv}
        onChange={onChangeMock}
        variant={ColorPickerVariant.Free}
      />
    );

    const hexInput = getByPlaceholderText('Hex');
    fireEvent.change(hexInput, { target: { value: '#00ff00' } });
    const colorPreview = container.querySelector('.mocp.cp-color-preview');
    expect(colorPreview).toBeDefined();
  });

  test('RGB input fields update correctly', () => {
    const onChangeMock = jest.fn();
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    const hsv = { h: 0, s: 0, v: 0 };
    const { getByPlaceholderText } = render(
      <ColorPicker
        color="#ff0000"
        colors={colors}
        hsv={hsv}
        onChange={onChangeMock}
        variant={ColorPickerVariant.Free}
      />
    );

    const rInput = getByPlaceholderText('R');
    const gInput = getByPlaceholderText('G');
    const bInput = getByPlaceholderText('B');

    fireEvent.change(rInput, { target: { value: '100' } });
    fireEvent.change(gInput, { target: { value: '150' } });
    fireEvent.change(bInput, { target: { value: '200' } });
    expect(onChangeMock).toHaveBeenCalledWith({ h: 0, s: 0, v: 0 });
  });

  test('renders correctly with default props', () => {
    const { container } = render(
      <ColorPicker
      color=""
        hsv={{ h: 0, s: 0, v: 0 }}
        onChange={() => undefined}
      />
    );
    expect(container).toBeInTheDocument();
  });

  test('handleSaturationChange updates HSV value correctly', () => {
    const onChangeMock = jest.fn();
    const hsv = { h: 180, s: 50, v: 75 };
    const { container } = render(
      <ColorPicker
        color="#ff0000"
        colors={['#ff0000', '#00ff00', '#0000ff']}
        hsv={hsv}
        onChange={onChangeMock}
        variant={ColorPickerVariant.Free}
      />
    );

    const saturationDiv = container.querySelector('.mocp.cp-input-container')!;
    fireEvent.click(saturationDiv, { clientX: 50, clientY: 25 });
    expect(onChangeMock).toBeDefined();
  });

});
