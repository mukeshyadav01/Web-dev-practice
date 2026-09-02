// Function
// function greeting(){
//     console.log("Hello World");
//     return "Mukesh"
// }

// function addnumbers(a, b ,c=0 , d=0){
//     const sum = a+ b +c;
//     console.log(sum);
// }
// greeting();

// rest operator 
// function addnumbers(...num){
//     let sum= 0 ;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum)
// }
// addnumbers(5, 10);
// addnumbers(20, 30,77);
// addnumbers(3,5,2,1)
// console.log(greeting());

// REST AND SPREAD OPERATOR
// spread : ye pure array ko open kar deta hai 
// const arr = [3,5,22,1]
// const arr1 = [23,522,22]
// const ans = [...arr,...arr1];
// console.log(ans)

// REST: ye sabhi value ko pakadata hai call hone pe 
// const arr = [2,33,5,6,12,55]
// const [first,second,...ans]=arr;
// console.log(first,second,ans)

// Function :expression

// const addNumber= function (num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(3,4))

// Arrow funtion
// ()=>{
//  }

// const addNumber = ()=>{
//     console.log("hello Mukesh ")
// }
// addNumber();

// Method 1 
// const addNumber = (num1, num2)=>{
//     return num1+num2;
// }
// console.log(addNumber(3,5))

// Method2
// const addNumber = (num1, num2)=> num1+num2;
// console.log(addNumber(3,5))

// Same method we applied earlier
// let arr= [ 23,2,53,62,12,22];
// arr.sort((a,b)=>a-b);
// console.log(arr)

// if we have single parameter , no need of ()
// const squarNumber= num=>num*num;
// console.log(squarNumber(9))

// IIFE   ()()
// (function greet(){
//     console.log("hello ")
// })();

// (()=>{
//     console.log("Mukesh");
// })();

function greet(){
    console.log("Hello ji ,kais ho ")
}
function meet(callback){
    console.log("I am going to meet someone ")
    callback();
    console.log("I have finished")
}
meet(greet);