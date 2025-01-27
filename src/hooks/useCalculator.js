import { useState } from "react";

export default function useCalculator ()  {

  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const stringCalculation = (stringToBeCalculated) => {
    if(!stringToBeCalculated) {
        setResult(0)
        setError('')
        return 
    }
    let arrayNumbers = stringToBeCalculated.split(',')
    console.log(arrayNumbers)
    if(arrayNumbers.some(isNaN))
    {
        setError('Please enter valid input')
        setResult('')
        return
    }
    const sum = arrayNumbers.reduce((acc, curr) =>acc+ Number(curr), 0)
    setResult(sum)
    setError('')
  }
  return {result, error, stringCalculation}
}

