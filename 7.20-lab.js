function printSum(x, y) {
    // Convert strings to numbers
    let num1 = parseFloat(x);
    let num2 = parseFloat(y);
 
    // Check if the conversions resulted in valid numbers
    const isNum1NaN = isNaN(num1);
    const isNum2NaN = isNaN(num2);
 
    // Print appropriate messages based on the validity of the numbers
    if (!isNum1NaN && !isNum2NaN) {
       console.log(`Sum is ${num1 + num2}.`);
    } else if (isNum1NaN && isNum2NaN) {
       console.log(`'${x}' and '${y}' are not numbers.`);
    } else if (isNum1NaN) {
       console.log(`'${x}' is not a number.`);
    } else {
       console.log(`'${y}' is not a number.`);
    }
 }
 
 console.log("Testing printSum()...");
 
 printSum("3", "6");            // Sum is 9.
 printSum("3.5", "6.1");        // Sum is 9.6
 printSum("hello", "6");        // 'hello' is not a number.
 printSum("10", "hi");          // 'hi' is not a number.
 printSum("hello", "hi");       // 'hello' and 'hi' are not numbers.
 
 // Do NOT remove the following line
 export default printSum;