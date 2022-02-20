// module 31-5


const priya = 'Asif Akbar';
const meye = "Meye tumi ki amay chino "
const kobita = `Kobita tumi sopno charini ` //`` this is called backpick

const multiline = 'This is my first line. \n'+
'second line.\n '+
'this is third line. \n'+
'this is fourth line'


const multilineNew = `this is first line    
this is second line
this is third line
this is fouth line`
// console.log(multilineNew)




const friends = ['abul', 'babul', 'kabul', 'mabul'];

const count = 5;

const old = '<h3 class="friend-name">Friend-4<p>Libero, ducimus?</p>'
const old1 = '<h3 class="friend-name">Friend-'+ count +'Libero, ducimus?</p>'
const old2 = `<h3 class="friend-name">Friend-${count} Libero, ducimus?</p>`  //this is benefit of using 


const old3 = `<h3 class="friend-name">Friend-${friends.length} Libero, ducimus?</p>` 



console.log(old3)


const first = 'Mamun';
const second = 'choudury'

const fullname = `this is full name: ${first} ${second} has money ${(friends.length+ 3)*500}`


console.log(fullname)