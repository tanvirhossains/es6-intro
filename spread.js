// module 31-8

const numbers = [23, 65,99, 21, 34];

console.log('number',numbers)
console.log('number without bracket', ...numbers)


const max = Math.max(23,33,34);
// const maxInNumber = Math.max(numbers) //if it use will show NaN
const maxInNumber = Math.max(...numbers) // will show the max number 
console.log('max',max,'maxNumber', maxInNumber)


const numbers2 = numbers;
numbers.push(55);

let numbers3 = [numbers] // there have two array , here "numbers" is a array 
const  numbers4 = [...numbers, 88] //if three dot use the bracket won't show 



console.log('number after push', numbers)
console.log('number2',numbers2)
console.log('number3',numbers3)
console.log('number4',numbers4)