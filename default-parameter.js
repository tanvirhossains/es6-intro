// module 31-4

function add(num1, num2 = 34) {     //if num2's value is don't have then this value will take as a value


    // num2 = num2 || 0;             //option 2 
    /*  if(num2 == undefined){     //option 1 if i don't give any number then
         num2 = 0;
     } */
    console.log(num1, num2)
    const total = num1 + num2;
    return total;
}

const result = add(15, 23);
console.log(result);

function fullName(first, last = 'chowdhury') {
    const name = first + ' ' + last;
    return name;
}
