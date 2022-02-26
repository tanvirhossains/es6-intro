// module 31-8(Spread operator, array max, copy arrays)

const numbers = [23, 65,99, 21, 34];

console.log('number',numbers)
console.log('number without bracket', ...numbers)


const max = Math.max(23,33,34);
// const maxInNumber = Math.max(numbers) //if it use will show NaN
const maxInNumber = Math.max(...numbers) // will show the max number 
console.log('max',max,'maxNumber', maxInNumber)

console.log('this is long number', Math.max(...numbers))//max number will show

const numbers2 = numbers;
console.log('number2',numbers2);

numbers.push(55);
console.log('number after push', numbers)


let numbers3 = [numbers] // there have two array , here "numbers" is a array,
 console.log('number3 working as a array:=',numbers3)
const  numbers4 = [...numbers, 88] //if three dot use the bracket won't show 






console.log('number4',numbers4)