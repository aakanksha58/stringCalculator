import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./stringCalculator.css"
import useCalculator from "../hooks/useCalculator";
import "./stringCalculator.css"

export default function StringCalculator() {

    const [userInput, setUserInput] = useState('')
    const { result, error, stringCalculation } = useCalculator()

    const handleInput = (event) => {
        const inputValue = event.target.value; 
        setUserInput(inputValue);
    };

    const handleClickCalculate = () => {
        stringCalculation(userInput);
    };

    return (
        <div className="stringcalc-container">
            <div className="stringcalc-card">
                <div className="stringcalc-header">
                    <h1 className="stringcalc-header-title">String Calculator</h1>
                </div>
                <div className="stringcalc-textfield">
                    <label className="stringcalc-textfield-label">Enter numbers with comma or newline separated</label>
                    <TextField
                        id="userInputId"
                        data-testid="userInputId"
                        placeholder="Ex. 1,2,3 or 1\n2,3"
                        variant="standard"
                        onChange={handleInput}
                        value={userInput}
                        sx={{
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#4f46e5',
                            },
                        }}
                    />
                </div>
                <div className="stringcalc-button-div" >
                    <Button variant="contained"  className="stringcalc-button" onClick={handleClickCalculate} >Calculate Sum</Button>
                </div>
                {result !== '' && (
                    <div className="stringcalc-result">
                        <label  className="stringcalc-result-label" >Result</label>
                        <div data-testid="result-div"  className="stringcalc-result-text">{result}</div>
                    </div>
                )}
                {error !== '' && (
                    <div className="stringcalc-result">
                        <label className="stringcalc-error-label" >Error</label>
                        <div data-testid="error-div" className="stringcalc-error-text">{error}</div>
                    </div>
                )}
            </div>
        </div>
    )
}