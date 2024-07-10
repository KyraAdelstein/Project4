function trianglePerimeter(x1, y1, x2, y2, x3, y3) {
    // Calculate the length of each side
    let side1 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let side2 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
    let side3 = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
 
    // Return the sum of the three sides
    return side1 + side2 + side3;
 }
 
 function triangleArea(x1, y1, x2, y2, x3, y3) {
    // Calculate the length of each side
    let side1 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let side2 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
    let side3 = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
 
    // Calculate the semi-perimeter
    let s = (side1 + side2 + side3) / 2;
 
    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
 
    // Round the result to avoid floating-point precision issues
    return Math.round(area * 100000000) / 100000000;
 }
 
 console.log("Testing trianglePerimeter()...");
 let perimeter = trianglePerimeter(1, 0, 2, 4, 4, 3);
 console.log("Perimeter = " + perimeter);
 
 console.log("Testing triangleArea()...");
 let area = triangleArea(1, 0, 2, 4, 4, 3);
 console.log("Area = " + area);
 
 // Additional test case
 console.log("Testing triangleArea() with (9, 4), (13, 6), (2, 3)...");
 let testArea = triangleArea(9, 4, 13, 6, 2, 3);
 console.log("Area = " + testArea);  // Should output 5
 
 // Do NOT remove the following line:
 export { trianglePerimeter, triangleArea };
 