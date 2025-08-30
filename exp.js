/*part1*/
/*variables*/
//1.using let as keyword
let Name = 'Walter';
//calling output
console.log(Name)

//2.using const as key word (can't be changed)
const sirname = Walter;
//calling output
console.log(sirname)

/*data types*/
//1.primitive(basics)
let game = 'degaenarena';//string
let playerid = 1 //number
let  ischampion = true //boolean
let price; //not defined

//2.non primitive(complex)
let employee = {name:"Irakoze_Charles",post:"accounts"}//object
let cars = ['bently','chevrolet']//array

/*using if & else*/
let number = 18;
if (minAge >=18){
    console.log('may enter');
}
else{
    console.log('not allowed');
}

/*part 2*/
//functions
//for calculating total
function sum(a,b){
    console.log(a+b)
}
//calling function
sum(4,5)

//formating strings(DOM application)
function editingtext(){
    let text = document.getElementsByClassName("text")
    text.style.color = "brown";
}

/*part 3*/
//loops
//for loop
for (let i = 0; i < 5; i++){
    console.log(i);
}

//while loop
let i = 0;
while ( i < 5){
    console.log(i);
    i++;
}
