# JavaScript-Q17
Write a JavaScript program to get integers in the range (x, y) using recursion.  
Example: range(2, 9) 
Expected Output : [3, 4, 5, 6, 7, 8]

// Function to generate a range of numbers between start_num and end_num (exclusive).
var range = function(start_num, end_num) 
{
  // Base case: if the difference between end_num and start_num is 2,
  // return an array containing the number between them.
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    // Recursive case: generate the range between start_num and end_num - 1,
    // then push the current end_num - 1 to the array.
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

// Example usage: Generate and print the range of numbers between 2 and 9 (exclusive).
console.log(range(2, 9));


**Output:**

[3,4,5,6,7,8]
