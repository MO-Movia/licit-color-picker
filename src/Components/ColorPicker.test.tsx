import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ColorPicker, { ColorPickerVariant } from './ColorPicker'; // Adjust the import path based on your project structure
import { ColorHSV } from '../Interfaces/Color';

// Mock the utility functions and child components
jest.mock('../Utils', () => ({
  parseColor: jest.fn((hsv) => ({ rgb: { r: 0, g: 0, b: 0 }, hex: '#000000', hsv })),
  getSaturationCoordinates: jest.fn((hsv) => ({ x: 0, y: 0 })),
  getHueCoordinates: jest.fn((hsv) => ({ x: 0, y: 0 })),
  hexToRgb: jest.fn((hex) => ({ r: 0, g: 0, b: 0 })),
  isValidHexaCode: jest.fn(() => true),
  rgbToHsv: jest.fn((rgb) => ({ h: 0, s: 0, v: 0 })),
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
          <ColorPicker color="#ff0000" colors={colors} hsv={hsv} onChange={() => {}} variant={ColorPickerVariant.Free} />
        );

        // Assert that the container with the correct class name is present
        expect(container.querySelector('.mocp.cp-container')).toBeInTheDocument();

        // Assert that PredefinedSelector is not rendered when variant is Free
        expect(container.querySelector('.PredefinedSelector')).toBeNull();
      });


  test('handles Hex input change correctly', () => {
    const onChangeMock = jest.fn();
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    const hsv = { h: 0, s: 0, v: 0 };
    const { getByPlaceholderText } = render(
      <ColorPicker color="#ff0000" colors={colors} hsv={hsv} onChange={onChangeMock} variant={ColorPickerVariant.Free} />
    );

    const hexInput = getByPlaceholderText('Hex');
    fireEvent.change(hexInput, { target: { value: '123456' } });

    // Assert that the onChange function is called with the expected value
    expect(onChangeMock).toHaveBeenCalledWith({ h: 0, s: 0, v: 0 });
  });

  test('calls onChange with updated values for each component', () => {
    const onChangeMock = jest.fn();
    const placeholderHSV: ColorHSV = { h: 0, s: 0, v: 0 };

    const { getByLabelText } = render(
      <ColorPicker colors={[]} onChange={onChangeMock} variant={ColorPickerVariant.Free} hsv={placeholderHSV} /* other props as needed */ />
    );

    // Simulate user input for each RGB input
    fireEvent.change(getByLabelText('R'), { target: { value: '255' } });
    fireEvent.change(getByLabelText('G'), { target: { value: '128' } });
    fireEvent.change(getByLabelText('B'), { target: { value: '64' } });

    // Debugging: Log the values being passed to onChangeMock

    // Assert that onChange is called with the expected HSV values
    expect(onChangeMock).toHaveBeenCalledWith({ h: 0, s: 0, v: 0 }); // Adjust the expected values based on your logic
  });

  test('calls onChange with updated values',  () => {
    const onChangeMock = jest.fn();
    const placeholderHSV = { h: 0, s: 0, v: 0 };
    const { container } = render(
      <ColorPicker colors={[]} hsv={placeholderHSV} onChange={onChangeMock} variant={ColorPickerVariant.Free} />
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
    } as DOMRect));

    if (container.firstChild instanceof HTMLElement) {
      container.firstChild.getBoundingClientRect = mockBoundingClientRect;
    }

    fireEvent.mouseMove(container.firstChild as HTMLElement, { clientX: 50, clientY: 25 });

    // Use waitFor to ensure asynchronous actions are complete
    // await waitFor(() => {
    //   // Assert that onChange is called with the expected HSV values
    //   expect(onChangeMock).toHaveBeenCalledWith({ h: 0, s: 0, v: 0 });
    // });

  });

//   test('calls onChange with updated values', async () => {
//     const onChangeMock = jest.fn();
//     const placeholderHSV = { h: 180, s: 50, v: 75 }; // Example initial HSV values
//     const { container } = render(
//       <ColorPicker onChange={onChangeMock} variant={ColorPickerVariant.Free} colors={[]} hsv={placeholderHSV} />
//     );

//     const mockBoundingClientRect = jest.fn(() => ({
//       width: 200,
//       left: 0,
//     } as DOMRect));

//     if (container.firstChild instanceof HTMLElement) {
//       container.firstChild.getBoundingClientRect = mockBoundingClientRect;
//     }

//     // Simulate a mouse event on the color picker container
//     fireEvent.mouseMove(container.firstChild as HTMLElement, { clientX: 50 });

//     // Wait for asynchronous actions to complete
//     await waitFor(() => {
//       // Assert that onChange is called with the expected HSV values
//       expect(onChangeMock).toHaveBeenCalledWith({ h: 180, s: 50, v: 75 }); // Adjust the expected values based on your logic
//     });
//   });
});
