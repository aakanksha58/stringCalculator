import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import StringCalculator from "../components/StringCalculator";

describe('String Calculator Component', () => {
    test ('Renders the result 0 for empty string', ()=> {
        render(<StringCalculator/>)
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button',{name:/calculate sum/i})
        fireEvent.change(input, {target:{value:''}})
        fireEvent.click(button)
        const result = screen.getByTestId('result-div');
        expect(result).toHaveTextContent(0)
    })
    
})