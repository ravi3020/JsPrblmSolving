//Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
//method 1
function ravi(a, b) {
    if (a === 100 || b === 100 || (a + b) === 100) {
        return true;
    } else {
        return false;
    }
}
console.log(ravi(10, 0))
//method 2
const isEqual = (a, b) => a === 100 || b === 100 || (a + b) === 100
console.log(isEqual(100, 0))

//Write a JavaScript exercise to get the extension of a filename.

const fileName = (str) => str.slice(str.lastIndexOf('.'))
console.log(fileName('index.html'))
console.log(fileName('index.config.js'))

//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet
const charsForward = (str) =>
    str.split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');

console.log(charsForward('ravi'))

/* Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */
//way1
const formatDate = (date = new Date()) => {
    const dates = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    const day = date.toLocaleDateString('en-Us', { weekday: "long" })
    return `${dates}/${months}/${years}  ${day}`
}
console.log(formatDate())
//way2
const today = new Date();
const d = today.getDate();
const m = today.getMonth() + 1;
const y = today.getFullYear();
const week = today.toLocaleDateString('en-Us', { weekday: "long" })
const hour = today.getHours();
const min = today.getMinutes();
// const sec = today.getSeconds();
// console.log(sec);
console.log(d + "/" + m + "/" + y + " " + week + " " + hour + ":" + min);

/*Write a JavaScript program to create a new string adding "New!" in front of a given string. If
the given string begins with "New!" already then return the original string. */
//way1(ternaryOperator using)
const ternaryOperator = (str) => str.startsWith("New!") ? str : "New!" + str
console.log(ternaryOperator("heloo"));

//way2
function addNew(str) {
    return str.indexOf("New!") === 0 ? str : "New!" + str
}
console.log(addNew("New! helllo"));

//way3 (sync)
async function addNewPrefix(inputString) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (inputString.startsWith("New!")) {
                resolve(inputString);
            } else {
                resolve(`New! ${inputString}`);
            }
        }, 1000); // Simulating an asynchronous operation with setTimeout
    });
}

async function main(inputString) {
    try {
        // const inputString = "Example"; // Replace with your input string
        const result = await addNewPrefix(inputString);
        console.log(result);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
main("Ne! helo");
