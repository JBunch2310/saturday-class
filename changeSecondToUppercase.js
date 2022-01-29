//Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.

let str1 = "javascript";  

function changeLetter(string){
    let newString = ""
    for (let i = 0; i < string.length; i++){
        if ((i+1) % 2 === 0){
            newString += 'Z'
        } else {
            newString =+ string[i]
        }
    }
    return newString
}

const result = changeLetter(str1)
console.log(result)

// Example output: jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 