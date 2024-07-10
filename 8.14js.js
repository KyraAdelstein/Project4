function parseScores(scoresStr) {
    return scoresStr.split(' ');
 }
 
 function buildDistributionArray(scoresArray) {
    let distribution = [0, 0, 0, 0, 0];
 
    for (let score of scoresArray) {
       let num = parseInt(score);
       if (num >= 90) {
          distribution[0]++;
       } else if (num >= 80) {
          distribution[1]++;
       } else if (num >= 70) {
          distribution[2]++;
       } else if (num >= 60) {
          distribution[3]++;
       } else {
          distribution[4]++;
       }
    }
 
    return distribution;
 }
 
 function setTableContent(scoresStr) {
    let scoresArray = parseScores(scoresStr);
    let distributionArray = buildDistributionArray(scoresArray);
 
    // Create bar graph for the first row
    let firstRowHtml = '';
    for (let i = 0; i < distributionArray.length; i++) {
       firstRowHtml += `<td><div style="height:${distributionArray[i] * 10}px" class="bar${i}"></div></td>`;
    }
    document.getElementById('first-row').innerHTML = firstRowHtml;
 
    // Create grade frequencies for the third row
    let thirdRowHtml = '';
    for (let count of distributionArray) {
       thirdRowHtml += `<td>${count}</td>`;
    }
    document.getElementById('third-row').innerHTML = thirdRowHtml;
 }
 
 // Testing with provided scores
 setTableContent("45 78 98 83 86 99 90 59");
 