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
    count += berry + " strawberries! That's how many."
}
}
document.getElementById("berryCount").innerHTML = count;

function Switch() {
  document.body.classList.toggle("dayNight");
  var day = document.getElementById("dayTime");
  if (day.innerHTML === "Click to Shop at Night") {
    day.innerHTML = "Click to Shop at Daylight";
  } else {
    day.innerHTML = "Click to Shop at Night";
  }
}


function crossOut() {
  const element = document.getElementById("grocery");
  element.remove();
}