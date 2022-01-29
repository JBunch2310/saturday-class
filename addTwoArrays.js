// Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length.

let arr_3 =[4, 6, 7];
let arr_4 =[8, 1, 9];
let newArray = [];

function addArray(arr1, arr2){
    for (let i = 0; i < arr_3.length; i++) {
            let result = (arr1[i] + arr2[i])
            newArray.push(result)
    }
    return newArray
}

console.log(addArray(arr_3,arr_4))

//example output:
// [12 ,7, 16]
