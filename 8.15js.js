window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const cInput = document.getElementById('cInput');
   const fInput = document.getElementById('fInput');
   const convertButton = document.getElementById('convertButton');
   const errorMessage = document.getElementById('errorMessage');
   const weatherImage = document.getElementById('weatherImage');

   convertButton.addEventListener('click', function () {
      let celsius = parseFloat(cInput.value);
      let fahrenheit = parseFloat(fInput.value);

      if (cInput.value !== '' && !isNaN(celsius)) {
         let convertedF = convertCtoF(celsius);
         fInput.value = convertedF;
         updateImage(convertedF);
         errorMessage.textContent = '';
      } else if (fInput.value !== '' && !isNaN(fahrenheit)) {
         let convertedC = convertFtoC(fahrenheit);
         cInput.value = convertedC;
         updateImage(fahrenheit);
         errorMessage.textContent = '';
      } else {
         if (cInput.value !== '' && isNaN(celsius)) {
            errorMessage.textContent = `${cInput.value} is not a number`;
         } else if (fInput.value !== '' && isNaN(fahrenheit)) {
            errorMessage.textContent = `${fInput.value} is not a number`;
         }
      }
   });

   cInput.addEventListener('input', function () {
      fInput.value = '';
   });

   fInput.addEventListener('input', function () {
      cInput.value = '';
   });
}

function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
}

function updateImage(tempFahrenheit) {
   const weatherImage = document.getElementById('weatherImage');
   if (tempFahrenheit < 32) {
      weatherImage.src = 'images/cold.png';
      weatherImage.alt = 'Cold';
   } else if (tempFahrenheit <= 50) {
      weatherImage.src = 'images/cool.png';
      weatherImage.alt = 'Cool';
   } else {
      weatherImage.src = 'images/warm.png';
      weatherImage.alt = 'Warm';
   }
}
