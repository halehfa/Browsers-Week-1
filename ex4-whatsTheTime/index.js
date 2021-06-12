'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
  let minutes = 1000 * 60;
  let hours = minutes * 60;
  let d = new Date();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
  let fullDate =  d.getHours() + ' : ' + d.getMinutes() + ' : ' + d.getSeconds();
  document.body.textContent = fullDate;
}

setInterval(addCurrentTime, 1000);

// TODO execute `addCurrentTime` when the browser has completed loading the page
window.addEventListener('load' ,addCurrentTime());
