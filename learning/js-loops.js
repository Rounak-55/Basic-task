// For Loop
// for (let i = 1; i < 11; i++) {
//     console.log(`5 X ${i} = ${i * 5}`)
// }

// While Loop
// let j = 1;
// while (j < 11) {
//     console.log(`5 X ${j} = ${j * 5}`)
//     j = j + 1;
// }

// Do While Loop
// let z = 1;
// do {
//     console.log(`5 X ${z} = ${z * 5}`)
//     z += 1;
// } while (z < 11)

// Assignment Operatior
// a = 5
// a = a + 1;

// a += 1; // shorthand
// a -= 1;

// a++; // uninary

// Comparison Operator
// > = greater then
// < = smaller then
// <= = smaller and equal to
// >= = greater and equal to
// == = equal to (only value)
// === = Strict Equal To (value and type check)
// != = Not equal

// let a = 5;
// let b = a > 10 ? "true" : "false"
// let c = phoneNumber

// Logical Operator
// && - and (both have to be true)
// || - or (only one side can be true)
// ! - Not

// Example
// if (age > 18 && legal) {
//     console.log("You can do it")
// }

// switch Statement
// let mode = "text"

// switch (mode) {
//     case "text":
//         console.log("Text mode selected");
//         break;
//     case "whatsapp":
//         console.log("whatsapp mode selected");
//         break;
//     case "facebook":
//         console.log("facebook mode selected");
//         break;
//     default:
//         console.log("no mode selected");
// }
let foods = ["pizza", "burger", "biryani", "fish", "chicken", "mutton", "paneer", "egg", "momo", "chowmin", "noodles", "pasta"]
// for of - value
// for (let food of foods) {
//     console.log(food)
// }
// for in - index
// for (let food in foods) {
//     console.log(`${food} = ${foods[food]}`)
// }
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// foreach
// foods.forEach((food, index) => console.log(food, index))
// map
// let newNums = nums.map((num) => {
//     return num * 2
// })
// console.log(nums)
// console.log(newNums)
// filter
// const newNums = nums.map((num) => num * 10)
// const newArr = newNums.filter((num) => num > 30)
// console.log(newArr)

// reduce - accumelator
const totalBill = nums.reduce((cur, total) => cur + total, 100)
// const totalBill = nums.reduce((cur, total) => cur + total, initalValue(optional))
console.log("Total Bill is : " + totalBill)