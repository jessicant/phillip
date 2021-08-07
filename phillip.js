var totalFed = 0;
var totalPats = 0;
var sleeping = false;

function readTextFile(){
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", "file://C:\Users\Jess\Desktop\Programmin\Projects\Pet\testing.txt");
  var allText = rawFile.responseText;
  console.log(allText);
}

function feed(amount){
  totalFed += amount;
  var health = document.getElementById("health");
  health.textContent = totalFed/4 + " HP ";
  console.log("what up");
}

function sleepingIcon() {
  if (sleeping){
    sleeping = false;
  } else {
    sleeping = true;
  }
  var icon = document.getElementById("icon");
  if(!sleeping){
   icon.innerText = "(●´ω｀●)"
 } else {
    icon.innerText = "(︶｡︶✽)"
 }
}

function pat(){
  var icon = document.getElementById("icon");
  var pats = document.getElementById("petting");
  totalPats += 1;
  pats.innerText = totalPats + " Pats";
  icon.innerText = "≧◡≦";
  setTimeout(() => {icon.innerText = "(●´ω｀●)"}, 2000);
}