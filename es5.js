// // ES5 vs ES6

// let a = 5;
// // console.log(a)

// const b = 10;

// for (let index = 0; index < 3; index++) {
//   const element = index;
// }

// function example() {
//   let x = 1;
//   if (true) {
//     let x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }
// example();
// console.log(x);

// Functions
let a = function () { };

// Arrow Function
// => Fat Arrow
let b = () => { };

let myArr = [2, 3, 4];

var result = myArr.filter(function (item) {
    return item % 2 == 0;
});
console.log(result);

let newResult = myArr.filter((item, x) => item % 2 == 0);
console.log(newResult);

document.getElementById("btn").addEventListener("click", function () {
    console.log(this);
});

document.getElementById("btn").addEventListener("click", () => {
    console.log(this);
});

// String

var message = "Hello";
var username = "Vasanth";

var sentance =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam amet hic fugiat, " +
    username +
    " numquam officia facere eveniet in totam consectetur illo sunt ab optio unde?. Sapiente mollitia commodi et dolores voluptas?";

// Template litrals
let sentance1 = `Lorem ipsum dolor sit amet, ${message} adipisicing elit. At rerum deleniti amet dicta ea fuga reiciendis facere ${username},
ex quisquam sequi molestias laudantium perspiciatis quae harum architecto officiis temporibus tenetur.`; // Backtick

console.log(sentance1);

// Spread Operator
let arr = [3, 4, 5, 6];

let arr2 = [1, 2, ...arr, 7, 8]; // [1,2,3,4,5,6,7,8]
console.log(arr2);

// Rest Operator
function foo(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
    return a + b;
}

let res = foo(2, 3, 4, 5, 6, 7, 8);

// Array Destructuring
let [person1, person2, person3] = ["Arun", "Gayathri", "Ramkumar"];

// Object Destructuring
let {
    name: studentName,
    age: studentAge,
    email: studentEmail,
} = {
    name: "Arun",
    age: 24,
    email: "arun@gmail.com",
};

console.log(studentName);
console.log(studentAge);
console.log(studentEmail);

// let username = student.name;
// let name = student.name;
// let age = student.age;
// let email = student.email;

let price = 200;
let qty = 4;
let productStatus = "avilable";

let otherDetails = {
    color: "red",
    brand: "polo",
    meterial: "cotton",
};

// if key and value are same. Then you can mention only key
let product = {
    price,
    qty,
    productStatus,
    ...otherDetails,
};

console.log(product);

let customers = [
    {
        customerName: "Arun",
        accountNumber: 342232,
    },
    {
        customerName: "Gayathri",
        accountNumber: 76543,
    },
];

customers = [...customers, { customerName: "Ramkumar", accountNumber: 543432 }];

console.log(customers);


export async function myFun() {
    console.log("Hello")
}



// let and const
// arrow function
// spread operator
// rest operator
// template litrals
// array destructuring
// object destructuring
// export and import