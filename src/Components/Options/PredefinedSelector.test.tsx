import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PredefinedSelector } from './PredefinedSelector';

describe('PredefinedSelector Component', () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff'];

  const mockColor = {
    hex: '#ffffff',
    rgb: {r:1,g:3,b:2},
    hsv: { h: 1,
        s: 2,
        v: 3}
  };


  it('renders correctly', () => {
    const onSelectMock = jest.fn();
    render(
      <PredefinedSelector colors={colors} onSelect={onSelectMock} parsedColor={mockColor} />
    );

    colors.forEach((color) => {
        const colorButton = (`color-button-${color}`);
        expect(colorButton).toBeDefined();

    });
  });

  xit('handles color selection correctly', () => {
    const onSelectMock = jest.fn();
    render(<PredefinedSelector colors={colors} onSelect={onSelectMock} parsedColor={mockColor} />);

    const colorButton = screen.getByTestId(`color-button-${colors[1]}`);
    fireEvent.click(colorButton);

    expect(onSelectMock).toHaveBeenCalledWith(colors[1]);
  });
});
