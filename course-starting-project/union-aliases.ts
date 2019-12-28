function combine (
    n1: number | string, 
    n2: number | string, 
    resultConversion: 'as-number' | 'as-text'){
    let result;
    if( typeof n1 === 'number' && 
        typeof n2 === 'number' || 
        resultConversion === 'as-number'){
        result = +n1 + +n2;
    }else{
        result = n1.toString() + n2.toString()
    }
    return result;
}

let number1: number;
number1 = 5;
const number2 = 2.8
const printResult = true;
let resultPhrase = 'Result is: ';


const combineAges = combine(11.11,11.11, 'as-number');
console.log({" combine Ages ": combineAges})

const combineStringValue = combine('30','20','as-number');
console.log({" combine combineStringValue ": combineStringValue})

const combineName = combine("Aaron","Yin", 'as-text')
console.log({" combine Name ": combineName})