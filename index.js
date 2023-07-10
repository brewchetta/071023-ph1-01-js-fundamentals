// console.log('hello world')

// WHAT IS A FUNCTION???
// an easy way to perform the same task over and over without rewriting

function printName(name) {
    console.log(`My name is ${name}`)
}

const someOtherFunction = function() {
    console.log("I am declared with const")
}

const myArrowFunc = (name) => {
    console.log("I am an arrow function " + name)
}

// function add(num1, num2) {
    //     return num1 + num2
    // }
    
    const add = (num1, num2) => num1 + num2
    // the numbers above will IMPLICITLY RETURN since this is an arrow function
    
    // const add = (num1, num2) => console.log(num1 + num2)
    
    if (0) {
        console.log("Hello I am true")
    } else {
        console.log("Goodbye I am false")
    }
    
    // 0 is falsy so this will go to the `else` statement
    
const animals = ["moose", "raccoon", "chicken", "crab", "ferret"]

// function sayAnimalName(animal) {
//     if (animal === "raccoon") {
//         console.log(`${animal} is a great animal`)
//     } else {
//         console.log(`${animal} is just ok`)
//     }
// }

animals.forEach( animal => console.log(animal) )