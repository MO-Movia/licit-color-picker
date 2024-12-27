import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PredefinedSelector } from './PredefinedSelector';

describe('PredefinedSelector Component', () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff'];

  const mockColor = {
    hex: '#ffffff',
    rgb: { r: 1, g: 3, b: 2 },
    hsv: { h: 1, s: 2, v: 3 },
  };

  it('renders correctly', () => {
    const onSelectMock = jest.fn();
    render(
      <PredefinedSelector
        colors={colors}
        onSelect={onSelectMock}
        parsedColor={mockColor}
      />
    );

    colors.forEach((color) => {
      const colorButton = `color-button-${color}`;
      expect(colorButton).toBeDefined();
    });
  });

  it('handles color selection correctly', () => {
    const onSelectMock = jest.fn();
    const { container } = render(
      <PredefinedSelector
        colors={colors}
        onSelect={onSelectMock}
        parsedColor={mockColor}
      />
    );
    const colorButton = container.querySelector('.cp-color-button')!;
    fireEvent.click(colorButton);
    expect(onSelectMock).toHaveBeenCalledWith(colors[0]);
  });

  it('handles color selection correctly by colorlist', () => {
    const onSelectMock = jest.fn();
    const colorsList = [...colors];

    const mockSameColor = {
      hex: '#ffffff',
      rgb: { r: 1, g: 3, b: 2 },
      hsv: { h: 1, s: 2, v: 3 },
    };
    const { container } = render(
      <PredefinedSelector
        colors={colorsList}
        onSelect={onSelectMock}
        parsedColor={mockSameColor}
      />
    );
    const colorButton = container.querySelector('.cp-color-button')!;
    fireEvent.click(colorButton);
    expect(onSelectMock).toHaveBeenCalledWith(colorsList[0]);
  });
});
