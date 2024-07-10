function sortEvens(numArray) {
    // Filter the even numbers from numArray
    let evenNums = numArray.filter(num => num % 2 === 0);
 
    // Sort the even numbers in ascending order
    evenNums.sort((a, b) => a - b);
 
    // Return the sorted array of even numbers
    return evenNums;
 }
 
 console.log("Testing sortEvens()...");
 let nums = [4, 2, 9, 1, 8];
 let evenNums = sortEvens(nums);
 console.log(evenNums);  // Output should be [2, 4, 8]
 
 // Additional test case
 nums = [3, 1, 95];
 evenNums = sortEvens(nums);
 console.log(evenNums);  // Output should be []
 
 // Do NOT remove the following line:
 export default sortEvens;
 