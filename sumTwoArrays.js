// Get the sum all their elements.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276

function sumOfElements(arr_1){
    let sum = 0
    for (let i = 0; i < arr_1.length; i++) {
            sum = sum +arr_1[i]
            //sum += arr_1[i]
    }
    return sum
}

console.log(sumOfElements(arr_1))

// Example output: 
// 276