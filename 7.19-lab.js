function calcWordFrequencies(words) {
    // Split the input string into an array of words
    let wordArray = words.split(" ");
 
    // Create a map to store word frequencies
    let wordMap = new Map();
 
    // Iterate through the array and count frequencies
    wordArray.forEach(word => {
       if (wordMap.has(word)) {
          wordMap.set(word, wordMap.get(word) + 1);
       } else {
          wordMap.set(word, 1);
       }
    });
 
    // Output the word frequencies
    wordMap.forEach((frequency, word) => {
       console.log(word + " " + frequency);
    });
 }
 
 console.log("Testing calcWordFrequencies()...");
 calcWordFrequencies("hey hi Mark hi mark");
 
 // Do NOT remove the following line:
 export default calcWordFrequencies;
 