let timerId = null;

window.addEventListener("DOMContentLoaded", function () {
   document.addEventListener("click", startAnimation);
});

function startAnimation(e) {
   // Stop the current animation if timerId is not null
   if (timerId !== null) {
      clearInterval(timerId);
   }

   // Get mouse coordinates
   let clickX = e.clientX;
   let clickY = e.clientY;

   // Start a timer to call moveImage every 10 milliseconds
   timerId = setInterval(function () {
      moveImage(clickX, clickY);
   }, 10);
}

function moveImage(x, y) {
   const img = document.querySelector("img");

   // Determine current location of image
   let imgX = parseInt(img.style.left);
   let imgY = parseInt(img.style.top);

   // Determine coordinates to move towards
   const centerX = Math.round(x - (img.width / 2));
   const centerY = Math.round(y - (img.height / 2));

   // Stop the animation if the image reaches the target coordinates
   if (imgX === centerX && imgY === centerY) {
      clearInterval(timerId);
      timerId = null; // Reset timerId
      return;
   }

   // Move 1 pixel in both directions towards the click
   if (imgX < centerX) {
      imgX++;
   } else if (imgX > centerX) {
      imgX--;
   }

   if (imgY < centerY) {
      imgY++;
   } else if (imgY > centerY) {
      imgY--;
   }

   // Update the image's position
   img.style.left = imgX + "px";
   img.style.top = imgY + "px";
}
