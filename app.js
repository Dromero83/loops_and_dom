const groceries = ["milk", "eggs", "Shrek 2 DVD", "butter", "cake mix", "strawberries"]
let text = "";
for (let x of groceries) {
if (x === "Shrek 2 DVD") {continue;}
text += x + "<br>";
}
document.getElementById("grocery").innerHTML = text;

let count = ""
let berry = 1;
while (berry < 10) {
  count += berry + "... ";
  berry++;
  if(berry === 10){
    count += berry + " strawberries."
}}
document.getElementById("berryCount").innerHTML = count;

const dayTime = document.querySelector("body");
const dayText = document.getElementById("toggleText");

function Switch() {
  dayTime.classList.toggle("nightTime");
  if (dayText.innerHTML === "Shop at Night") {
    dayText.innerHTML = "Shop by Day";
  } else {
    dayText.innerHTML = "Shop at Night";
  }}

const textStyle= document.getElementById("listHover");
textStyle.addEventListener("mouseover", listHighlight);
textStyle.addEventListener("mouseout", listReturn);

function listHighlight(){
  this.style.color = "black";
  this.style.backgroundColor = "lightgray";
  this.style.borderColor = "black";
}
function listReturn(){
  this.style.color = "rgb(128, 0, 32)";
  this.style.backgroundColor = "rgb(245, 245, 175)";
  this.style.borderColor = "rgb(128, 0, 32)";
}