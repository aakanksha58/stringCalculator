import { useState } from "react";

export default function useCalculator ()  {

  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const stringCalculation = (stringToBeCalculated) => {
    console.log(stringToBeCalculated)
    if(!stringToBeCalculated) {
        setResult(0)
        setError('')
        return 
    }
  }
  return {result, error, stringCalculation}
}

