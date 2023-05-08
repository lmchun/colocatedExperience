// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// Get the modal
let modal = document.getElementById("myModal");

// const accessContent = document.querySelector("#accessPopup");


 window.addEventListener("load", (event) => {
  
     console.log("page is fully loaded");
     modal.style.display = "block";
});


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
 modal.style.display = "none";
}
}     
const overlay = document.querySelector('#overlay');
function showOverlay() {
  overlay.style.display = 'block';
  }
  // Example trigger with a button click
const button = document.querySelector('#help');
button.addEventListener('click', showOverlay);

function hideOverlay() {
overlay.style.display = 'none';
        }
// Example close button
const closeButton = document.querySelector('#close-button');
closeButton.addEventListener('click', hideOverlay);
// Example click outside of popup
overlay.addEventListener('click', hideOverlay);   
            

function scene1(){
  console.log("scene 1")
  accessContent.innerHTML = `
  <p>Scene 1</p>
  <p>You are in the elevator of Jay St. You see a list of buttons.</p>
  <p> Select SSC or 4?</p>
  <button class="button is-light" id="state" onclick="scene3()">4</button>
  <button class="button is-light" id="state" onclick="scene2()">SSC</button>

  `
}

function scene2(){
  accessContent.innerHTML = `
  <p>Scene 2</p>
  <p>You ride the elevator to the sub sub cellar.</p>
  
  <button class="button is-light" id="state" onclick="scene10()">Next</button>

  `
}

function scene3(){
  accessContent.innerHTML = `
  <p>Scene 3</p>
  <p>You ride the elevator up to the 4th floor, you take a look outside and walk into ITP. You walk to live web class.</p>
  <button class="button is-light" id="state" onclick="scene4()">Next</button>

  `
}

function scene4(){
  accessContent.innerHTML = `
  <p>Scene 4</p>
  <p>You see Shawn. Shawn:"Hi! Ready for class?"</p>
  <button class="button is-light" id="state" onclick="scene6()">No</button>
  <button class="button is-light" id="state" onclick="scene5()">Yes</button>

  `
}

function scene5(){
  accessContent.innerHTML = `
  <p>Scene 5</p>
  <p>You sit down for class and have a fascinating lecture about the magic of servers and wonder how databases work.</p>
  <p> Good Ending</p>
  `
}
function scene6(){
  accessContent.innerHTML = `
  <p>Scene 6</p>
  <p>You run back out of class back to the elevator and step in</p>
  <p> Select SC?</p>
  <button class="button is-light" id="state" onclick="scene2()">SC</button>
  `
}

function scene10(){
  accessContent.innerHTML = `
  <p>Scene 10</p>
  <p>The doors open to a dark tunnel</p>
  <p> Go to the right or left?</p>
  <button class="button is-light" id="state" onclick="scene11()">right</button>
  <button class="button is-light" id="state" onclick="scene12()">left</button>
  `
}
function scene11(){
  accessContent.innerHTML = `
  <p>Scene 11</p>
  <p>You go to the right hand side and continue to as it gets darker and darker.</p>
  <p> You get so lost and wonder how you could get back out?</p>
  <p> Bad Ending </p>
  `
}

function scene12(){
  accessContent.innerHTML = `
  <p>Scene 12</p>
  <p>You go to the left hand side and continue to as it gets darker.</p>
  <button class="button is-light" id="state" onclick="scene13()">??</button>
  `
}

function scene13(){
  accessContent.innerHTML = `
  <p>Scene 13</p>
  <p>You hear a faint horn.</p>
  <button class="button is-light" id="state" onclick="scene14()">??</button>
  `
}

function scene14(){
  accessContent.innerHTML = `
  <p>Scene 14</p>
  <p>As you continue you see a faint glow of light. You see a handle.</p>
  <button class="button is-light" id="state" onclick="scene15()">Open?</button>
  `
}
function scene15(){
  accessContent.innerHTML = `
  <p>Scene 15</p>
  <p>You open the door and see the glittering secrets of success and extra sleep. A computer screen flashes on, it reads "the secret was the friends we made on the way".</p>
  <p>Secret Ending</p>
  `
}