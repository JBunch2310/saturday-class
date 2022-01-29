// write a loop that creates a new array with the square of each number

const numbers = [2, 4, 9, 12, 7]
const anotheSetOfNumbers = [4, 5]
let newArray = []

// numbers.length allows you to run the loop the same amount of time are there are numbers in the first array
function squareNumbers(arr){
    for (let i = 0; i < arr.length; i++) {
            const result = arr[i] ** 2;
            newArray.push(result)
    }
    return newArray
}

console.log(squareNumbers(anotheSetOfNumbers))