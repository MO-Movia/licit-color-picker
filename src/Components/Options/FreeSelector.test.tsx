import { FreeSelector } from './FreeSelector';
import { Color } from '../../Interfaces/Color';


describe('FreeSelector component', () => {


    it('renders FreeSelector component correctly', () => {

        const mockColor: Color = {
            hex: '#ff0000',
            rgb: { r: 255, g: 0, b: 0 },
            hsv: { h: 0, s: 100, v: 100 },
        };
        const mockSatCoords: number[] = [50, 50];

        const mockOnSaturationChange = jest.fn();
        const mockOnHueChange = jest.fn();
        const  freeSelectorProps = {
            parsedColor: mockColor,
            satCoords: mockSatCoords,
            hueCoords: 30,
            onSaturationChange: mockOnSaturationChange,
            onHueChange: mockOnHueChange
          };

        expect(FreeSelector(freeSelectorProps)).toBeDefined();
    });


    it('renders FreeSelector component correctly with undefined hueCoords', () => {
        const mockColor: Color = {
          hex: '#ff0000',
          rgb: { r: 255, g: 0, b: 0 },
          hsv: { h: 0, s: 100, v: 100 },
        };
        const mockSatCoords: number[] = [50, 50];
        const mockOnSaturationChange = jest.fn();
        const mockOnHueChange = jest.fn();
        const freeSelectorProps = {
          parsedColor: mockColor,
          satCoords: mockSatCoords,
          hueCoords: undefined as unknown as number,
          onSaturationChange: mockOnSaturationChange,
          onHueChange: mockOnHueChange
        };

        const freeSelectorElement = FreeSelector(freeSelectorProps);
        expect(freeSelectorElement).toBeDefined();
      });

      it('renders FreeSelector component with undefined satCoords', () => {
        const mockColor: Color = {
            hex: '#ff0000',
            rgb: { r: 255, g: 0, b: 0 },
            hsv: { h: 0, s: 100, v: 100 },
        };
        const mockSatCoords: number[] = [];

        const mockOnSaturationChange = jest.fn();
        const mockOnHueChange = jest.fn();
        const freeSelectorProps = {
            parsedColor: mockColor,
            satCoords: mockSatCoords,
            hueCoords: 30,
            onSaturationChange: mockOnSaturationChange,
            onHueChange: mockOnHueChange
        };

        expect(FreeSelector(freeSelectorProps)).toBeDefined();
    });



});