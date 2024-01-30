import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ColorPicker, ColorPickerVariant } from './ColorPicker'; // Adjust the import path based on your project structure
import { ColorHSV } from '../Interfaces/Color';

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

  test('calls onChange with updated values for each component', () => {
    const onChangeMock = jest.fn();
    const placeholderHSV: ColorHSV = { h: 0, s: 0, v: 0 };

    const { getByLabelText } = render(
      <ColorPicker
        colors={[]}
        hsv={placeholderHSV}
        onChange={onChangeMock}
        variant={ColorPickerVariant.Free}
      />
    );

    fireEvent.change(getByLabelText('R'), { target: { value: '255' } });
    fireEvent.change(getByLabelText('G'), { target: { value: '128' } });
    fireEvent.change(getByLabelText('B'), { target: { value: '64' } });

    expect(onChangeMock).toHaveBeenCalledWith({ h: 0, s: 0, v: 0 });
  });

  test('calls onChange with updated values', () => {
    const onChangeMock = jest.fn();
    const placeholderHSV = { h: 0, s: 0, v: 0 };
    const { container } = render(
      <ColorPicker
        colors={[]}
        hsv={placeholderHSV}
        onChange={onChangeMock}
        variant={ColorPickerVariant.Free}
      />
    );

    const mockBoundingClientRect = jest.fn(() => ({
      width: 200,
      height: 100,
      left: 0,
      top: 0,
      right: 200,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    }));

    if (container.firstChild instanceof HTMLElement) {
      container.firstChild.getBoundingClientRect = mockBoundingClientRect;
    }

    fireEvent.mouseMove(container.firstChild as HTMLElement, {
      clientX: 50,
      clientY: 25,
    });
  });
});
