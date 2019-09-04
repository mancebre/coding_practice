/**
 Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers
 in the form of a phone number.

 **/

function createPhoneNumber(numbers) {
    // validate (array of 10 integers (between 0 and 9)).
    validate(numbers);
    // split to chunks.
    numbers = arrayChunk(numbers);
    // format phone number

    return formatPhone(numbers);
}

function validate(array) {
    if (array.length !== 10) {
        return false;
    }

    for (let item in array) {
        if (isNaN(item)) {
            return false;
        }
    }
}

function arrayChunk(array) {
    let i,j,temparray,chunk = 3, result = [];
    for (let i = 0; i < array.length; i += chunk) {

        if(result.length === 2) {
            chunk = array.length - chunk * 2;
        }
        temparray = array.slice(i, i+chunk);

        result.push(temparray);
    }

    return result;
}

function formatPhone(numberChunks) {
    let phone;

    phone = "(" + numberChunks[0].join("") + ")";
    phone += " ";
    phone += numberChunks[1].join("");
    phone += "-";
    phone += numberChunks[2].join("");

    return phone;
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890