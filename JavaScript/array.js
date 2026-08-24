// Array;
let marks = [34,33,54,23];
// console.log(marks);
// console.log(marks.length);

// Add elements to End
// marks.push("mukesh");
// marks.push(99);
// console.log(marks)

// Delete Elements to end 
// marks.pop()
// console.log(marks)

//  let arr = [10,28,38,73,33];
// // for(let i=0;i<arr.length;i++)
// // {
// //     console.log(arr[i]);
// // }
// for(let num of arr){
//     console.log(num);
// }
// const arr = [3,53,64,23,66,32];
// let arr1 = arr;
// arr1.push(3);
// console.log(arr1);

// Slicing
// const arr = [3,53,64,23,66,32];
// const arr1 = arr.slice(2,4)
// console.log(arr1)

// Spread Operator
// const arr = [3,53,64,23,66,32];
// const arr2 = ["Mukesh",33,true];
// const arr4 = ["Yadav",23,false]
// arr.push(arr2);
// const arr3 = arr.concat(arr2)
// const arr3= [arr,arr2,arr4]
// using spread
// const arr3= [...arr,...arr2,...arr4]
// console.log(arr3)

// Converting array to string
// const names = ["Alice","Bob","Charlie","Anand","Bibek"];
// console.log(names.toString())
// console.log(names.join("-"))
// names.sort();
// names.reverse();
// console.log(names);

// const a = [101,90,80,32,91];
// a.sort((a,b)=> a-b);   
// console.log(a);

// flattering array
const arr = [23,43,21,[54,97,99,[2,4,6,6]],11];
const a = arr.flat(2)
console.log(a)