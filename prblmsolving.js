//Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
//method 1
function ravi(a,b){
    if(a===100 ||b===100 || (a+b)===100){
        return true;
    }else{
        return false;
    }
}
console.log(ravi(10,0))
//method 2
const isEqual = (a,b)=> a===100||b===100||(a+b)===100
console.log(isEqual(100,0))

//Write a JavaScript exercise to get the extension of a filename.

const fileName = (str)=> str.slice(str.lastIndexOf('.'))
console.log(fileName('index.html'))
console.log(fileName('index.config.js'))

//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet
