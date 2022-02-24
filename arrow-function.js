// module 31 -6

function add(num1, num2){
    return num1 + num2
}

//function expression 
const add2 =function add2(sum1 , sum2){
    return sum1+sum2;
}

//function exprssion anonymous 
const add3 = function(sum1,sum2){
    return sum1 + sum2
}

//arrow function 
const add4 = (num1,num2) =>num1+num2;





const sum1 =add(15,17);
const sum2 = add2(12,16)
const sum3 = add3(10,30);
const sum4 = add4 (100,100)


console.log(sum2)
console.log(sum3)
console.log(sum4)
console.log(sum1)