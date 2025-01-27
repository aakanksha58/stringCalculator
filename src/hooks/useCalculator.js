import { useState } from "react";

export default function useCalculator() {

    const [result, setResult] = useState('')
    const [error, setError] = useState('')
    const stringCalculation = (stringToBeCalculated) => {
        if (!stringToBeCalculated) {
            setResult(0);
            setError('');
            return;
        }
        stringToBeCalculated = stringToBeCalculated.replace(/\\n/g, "\n")
        const { delimiters, sumNumbers } = extractDelimiters(stringToBeCalculated)
        validateInput(delimiters, sumNumbers)
        let numbersToBeCalculated = sumNumbers.split(new RegExp(`[${delimiters.join("")}]`)).map(Number);
        let sum = numbersToBeCalculated
            .reduce((acc, num) => acc + num, 0);
        if (isNaN(sum)) {
            setError('Please enter input in proper format')
            setResult('')
        }
        else {
            setError('')
            setResult(sum);
        }
    };

    const extractDelimiters = (stringToBeCalculated) => {
        const delimiterMatch = stringToBeCalculated.match(/^\/\/([^0-9\n])\n/);
        let delimiters = [",", "\n"];

        if (stringToBeCalculated.startsWith("//")) {
            if (!delimiterMatch) {
                setError("Please enter input in proper format")
                return
            }
            delimiters.push(delimiterMatch[1]);
            stringToBeCalculated = stringToBeCalculated.replace(delimiterMatch[0], "");
        }

        return { delimiters, sumNumbers: stringToBeCalculated };
    }

    const validateInput = (delimiters, sumNumbers) => {
        const validInputRegex = new RegExp(`^[0-9${delimiters.join("")}-]+$`);
        if (!validInputRegex.test(sumNumbers)) {
            setError("Please enter input in proper format")
            return
        }
    }
    return { result, error, stringCalculation }
}

