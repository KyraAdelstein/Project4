function drawTriangle(triangleSize) {
    // Outer loop to go through each line
    for (let i = 1; i <= triangleSize; i++) {
       // Initialize an empty string for the current line
       let line = '';
 
       // Inner loop to add the required number of asterisks to the line
       for (let j = 0; j < i; j++) {
          line += '*';
       }
 
       // Print the line
       console.log(line);
    }
 }
 
 // Testing the drawTriangle() function with triangleSize of 4
 console.log("Testing drawTriangle()...");
 drawTriangle(4);
 
 // Additional tests
 console.log("Testing drawTriangle() with triangleSize 1:");
 drawTriangle(1);
 
 console.log("Testing drawTriangle() with triangleSize 3:");
 drawTriangle(3);
 
 console.log("Testing drawTriangle() with triangleSize 5:");
 drawTriangle(5);
 
 // Do NOT remove the following line
 export default drawTriangle;
 