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
        let sum = stringToBeCalculated
            .split(/[\s,]+/)
            .map(Number)
            .reduce((acc, num) => acc + num, 0);

        setResult(sum);
        setError('');
    };

    return { result, error, stringCalculation }
}

