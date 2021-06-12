'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").textContent = "Hali";
document.getElementById("fav-food").textContent = "Pizza";
document.getElementById("hometown").textContent = "Esfoon";
let liElements = document.querySelectorAll('li');
for ( let i = 0; i < liElements.length ; i++ ) {
   liElements[i].classList.add("list-item");
}