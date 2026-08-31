// Object
// key value
// const user= {
//     name:"Mukesh",
//     age:23,
//     email: "mukesh@gmail.com",
//     amount:23000,
//     "home addresss":"Silvassa"
// }
// console.log(user["age"])
// console.log(user["home addresss"])
// console.log(user)
// console.log(typeof(user))
// console.log(user.age)

// CRUD := CREATE , READ , UPDATE , DELETE
// user.aadhar = 234434;
// user.aadhar = 99;
// delete user.email;
// console.log(user)

// const user= {
//     name:"Mukesh",
//     age:23,
//     email: "mukesh@gmail.com",
//     amount:23000
// }
// const user2 = user;
// user2.age = 25;
// console.log(user)


// IMPORTANT
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// for(let keys in user){
//     console.log(keys,user[keys]);
// }

// const user= {
//     name:"Mukesh",
//     age:23,
//     email: "mukesh@gmail.com",
//     amount:23000
// }

// for of loop array ke liye use hota hai 
// for(let key of Object.keys(user))
// {
//     console.log(key)
// }
// for(let value of Object.values(user)){
//     console.log(value)
// }
// for(let value of Object.entries(user)){
//     console.log(value)
// }

// const name = user.name;
// const age = user.age;


// Object ko destructing karna 
// const{name,age}= user;
// console.log(name,age)

// const arr= [23,53,64,54,75];
// const [first,second] = arr;
// console.log(first,second)

// const user= {
//     name:"Mukesh",
//     age:23,
//     email: "mukesh@gmail.com",
//     amount:23000,
//     greet: function(){
//         // this keyword refer to those , who called 
//         console.log(`${this.name} gate crack karne wala hai , achhe rank ke sath`); 
//         return 22;
//     }
// }
// const vs = user.greet();
// console.log(vs)
// user.greet();

// Nested object
const user= {
    name:"Mukesh",
    age:23,
    email: "mukesh@gmail.com",
    amount:23000,
    address:{
        city:"Silvassa",
        state : "DNH&DD"
    }
}
// spread operator ka use karte hai value ko alaag alag refer karne ke liye
// ye {...user} se sirf ek parent wala hi alag alag hota hai nested wala same ko hi refer kart hai 

// shallow copy
// const user2 = {...user};
// user2.name= "AMIT";
// console.log(user)
// console.log(user2)

// Deep copy

const user2 = structuredClone(user);
user2.address.city="Deoria";
console.log(user2)
// console.log(user) se user ke key aur value aate hai phir(.) se usake andar ke 
// console.log(user.address.city)