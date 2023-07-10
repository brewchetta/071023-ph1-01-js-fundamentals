console.log("---Additional Practice---")



// // // // // //
// given an array 
const elementsArr = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen"] 

// can you write a function that `console.log`s each element like so: "hydrogen is an element", "helium is an element"... etc

function elementLogger(arr) {
    arr.forEach( element => console.log(`${element} is an element`) )
}

// can you write a function that returns a NEW ARRAY for each element like so: "hydrogen is an element", "helium is an element" 

function makeNewArray(elementsArr) {
    return elementsArr.map( element => `${element} is an element` )
}

// BONUS: can you write a function that returns a NEW ARRAY with each element like so: "hydrogen is element number 1", "helium is element number 2" 

function orderedElementArrayBuilder(array) {
    // const result = []
    // for (let i = 0; i < array.length; i++) {
    //         result.push(`${array[i]} is element number ${i}`)
    //     }
    //     return result
    return elementsArr.map( (element, index) => `${element} is element ${index + 1}` )
}

// can you write a function to find THE FIRST word that starts with the letter "b"?

function firstB(array) {
    // for (const element of array) {
    //     if (element.startsWith("b")) {
    //         return element
    //     }
    // }
    return array.find( element => element.startsWith("b") )
}

// can you write a function to find EVERY word that starts with the letter "b"?

function everyB(array) {
    return array.filter( element => element.startsWith("b") )
}
// // // // // //

// // // // // //
// given an object 
const chettObj = { name: "Chett", cats: ["Ursula", "Octavia", "Luna"] }

// can you console.log the name inside the object?

// can you console.log the numberOfCats in the object like so: "{name} has {number of cats} cats"

// can you amend the console.log above so it reads: "{name} has {number of cats} cats named {cat name}, {cat name}, {cat name}"

// BONUS: for the cat names above, can you make it so it dynamically iterates through the cat names instead of hard coding them? if you're stuck then look up `.join`
// // // // // //