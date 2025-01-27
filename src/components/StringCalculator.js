import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./stringCalculator.css"
import useCalculator from "../hooks/useCalculator";

export default function StringCalculator() {

    const [userInput, setUserInput] = useState('')
    const { result, error, stringCalculation } = useCalculator()

    const handleInput = (event) => {
        const inputValue = event.target.value.replace(/"/g, '');
        setUserInput(inputValue);
    };

    const handleClickCalculate = () => {
        stringCalculation(userInput);
        setUserInput("");
    };

    return (
        <div>
            <div>
                <div>
                    <h1 >String Calculator</h1>
                </div>
                <div>
                    <label>Enter numbers with comma or newline separated</label>
                    <TextField
                        id="userInputId"
                        data-testid="userInputId"
                        placeholder="Ex. 1,2,3 or 1,\n2,3"
                        variant="standard"
                        onChange={handleInput}
                        value={userInput}
                    />
                </div>
                <div >
                    <Button variant="contained" onClick={handleClickCalculate} >Calculate Sum</Button>
                </div>
                {result !== '' && (
                    <div>
                        <label >Result</label>
                        <div data-testid="result-div" >{result}</div>
                    </div>
                )}
                {error !== '' && (
                    <div >
                        <label >Error</label>
                        <div >{error}</div>
                    </div>
                )}
            </div>
        </div>
    )
}