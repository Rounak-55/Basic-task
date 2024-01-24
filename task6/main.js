// let menu = ['fish', 'pizza', 'biryani']

// function checkArrayOrNot(arr) {
//     if (Array.isArray(arr)) {
//         console.log("This is Array")
//     } else {
//         console.log("This is not Array")
//     }
// }

// checkArrayOrNot(menu)
// checkArrayOrNot("jhvygtfv")


let studentName = ['rounak', 'arnab', 'debanshu'];

// function cloneArray(arr) {
//     return [...arr];
// }

// const newArray = cloneArray(studentName)

// let fruits = ["Banana", "coconut", "pineapple", "Orange", "Apple", "Mango"];

// function getElements(arr, n=1) {
//     console.log(arr.slice(0, n))
// }
// getElements(fruits)
// getElements(fruits, 3)

const nums = [1, 6, 3, 3, 6, 8, 2, 1, 3, 567, 34, 9]

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
}

const person = {
    "name": "Rounak Sarkar",
    "age": 20,
    "phone": [99999999, 777777777]
}

console.log(person["name"].slice(2, 5))
console.log(person["phone"][0])

person["weight"] = 100
console.log(person)