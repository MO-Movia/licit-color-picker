import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { PredefinedSelector } from './PredefinedSelector';

import { ColorHSV, ColorRGB } from '../../Interfaces/Color';

describe('PredefinedSelector Component', () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff'];

  const mockColor = {
    hex: '#ffffff',
    rgb: {r:1,g:3,b:2},
    hsv: { h: 1,
        s: 2,
        v: 3}
  };

  interface Color {
    hex: string;
    rgb: ColorRGB;
    hsv: ColorHSV;
  }

  interface PredefinedSelectorProps {
    parsedColor: Color;
    colors: Array<string>;
    onSelect(color: string): void;
  }

  xit('renders correctly', () => {
    const onSelectMock = jest.fn();
    const { getByText, getByTestId } = render(
      <PredefinedSelector colors={colors} onSelect={onSelectMock} parsedColor={mockColor} />
    );

    // Check if the component renders the correct number of color buttons
    colors.forEach((color) => {
        const colorButton = getByTestId(`color-button-${color}`);
        expect(colorButton).toBeInTheDocument();


      // Check if the component renders the preview color for each button
      const previewColor = getByTestId(`preview-color-${color}`);
      expect(previewColor).toBeInTheDocument();
      expect(previewColor).toHaveStyle(`background: ${color}`);
    });
  });

  xit('handles color selection correctly', () => {
    const onSelectMock = jest.fn();
    render(<PredefinedSelector colors={colors} onSelect={onSelectMock} parsedColor={mockColor} />);

    // Simulate user selecting a color
    const colorButton = screen.getByTestId(`color-button-${colors[1]}`);
    fireEvent.click(colorButton);

    // Assert that the onSelect function was called with the correct color
    expect(onSelectMock).toHaveBeenCalledWith(colors[1]);
  });
});
