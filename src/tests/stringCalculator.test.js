import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import StringCalculator from "../components/StringCalculator";

describe('String Calculator Component', () => {
    let input;
    let button;

    beforeEach(() => {
        render(<StringCalculator />);
        input = screen.getByRole('textbox');
        button = screen.getByRole('button', { name: /calculate sum/i });
    });

    test('Renders the result 0 for empty string', () => {
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(button);

        const result = screen.getByTestId('result-div');
        expect(result).toHaveTextContent('0');
    });

    test('Renders the sum for one string', () => {
        fireEvent.change(input, { target: { value: '1' } });
        fireEvent.click(button);

        const result = screen.getByTestId('result-div');
        expect(result).toHaveTextContent('1');
    });

    test('Handles unknown amount of numbers', () => {
        fireEvent.change(input, { target: { value: '1,5' } });
        fireEvent.click(button);

        const result = screen.getByTestId('result-div');
        expect(result).toHaveTextContent('6');
    });

    test('Handles new line between numbers', () => {
        fireEvent.change(input, { target: { value: '1\\n2,3' } });
        fireEvent.click(button);

        const result = screen.getByTestId('result-div');
        expect(result).toHaveTextContent('6');
    })

    test('Handles for supporting different delimeters', () => {
        fireEvent.change(input, { target: { value: '//;\\n1;2' } });
        fireEvent.click(button);

        const result = screen.getByTestId('result-div');
        expect(result).toHaveTextContent('3');
    })

    test('Handles negative numbers', () => {
        fireEvent.change(input, { target: { value: '-1,-2' } });
        fireEvent.click(button);

        const result = screen.getByTestId('error-div');
        expect(result).toHaveTextContent('Negatives not allowed: -1,-2');
    })
});