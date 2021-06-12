'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/

let image = document.querySelector('img');
image.style.left = '0px';
let imageLeftValue = parseInt(image.style.left);

let windowSize = parseFloat(window.innerWidth - image.width);
let middle = parseInt(windowSize / 2);
middle = parseInt(middle/10) * 10
console.log(middle);
console.log(windowSize);

function catWalk() {

   imageLeftValue += 10;

   if(windowSize <= imageLeftValue){
      imageLeftValue = 0;
   }

   image.style.left = `${imageLeftValue}px`;

   if (imageLeftValue === middle) {
      clearInterval(moveTheCat);
      image.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

      setTimeout(function () {
        image.src = 'cat-walk.gif';
        moveTheCat = setInterval(catWalk, 50);
      }, 5000);
    }

} 
let moveTheCat = setInterval(catWalk, 50 );
