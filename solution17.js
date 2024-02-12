// Function to generate a range of numbers between start_num and end_num (exclusive).
var range = function (start_num, end_num) {
    // Base case: if the difference between end_num and start_num is 2,
    // return an array containing the number between them.
    if (end_num - start_num === 2) {
        return [start_num + 1];
    }
    else {
        // Recursive case: generate the range between start_num and end_num - 1,
        // then push the current end_num - 1 to the array.
        var list = range(start_num, end_num - 1);
        list.push(end_num - 1);
        return list;
    }
};

// Example usage: Generate and print the range of numbers between 2 and 9 (exclusive).
console.log(range(2, 9));

/*Output:

[3, 4, 5, 6, 7, 8]*/

//Sample Solution-2:

// Function to get integers in the range (x, y) using recursion.
function getRangeIntegers(x, y, result = []) {
    // Base case: if x is equal to or greater than y, return the result.
    if (x >= y - 1) {
        return result;
    } else {
        // Recursive case: increment x and push it to the result array.
        result.push(x + 1);
        return getRangeIntegers(x + 1, y, result);
    }
}

// Example usage: Get and print integers in the range (2, 9).
console.log(getRangeIntegers(2, 9));

/* Output:

[3, 4, 5, 6, 7, 8]*/