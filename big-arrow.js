// module 31-7

const add = (num1, num2) => num1 + num2;
const sum = add(11, 33);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 5, 12);

const tenTimes = (num) => num * 10;
const tentime = tenTimes(10)

const fiveTimes = num => num * 5
const fivetime = fiveTimes(5);

const getName = () => 'Brandon Sam'
const name = getName()


const doMath = (x, y) => {  //if calculation too much then this type
    const sum = x + y;
    const divide = x % y
    const result = sum * divide;
    const output = result * 5;
    return output;
}
const total = doMath(10,7);




console.log(sum)
console.log(tentime)
console.log(fivetime)
console.log(name)
console.log(total)