myStorage = window.localStorage;
var totalFed;
var totalPats;
var sleeping;
var sad;
var angry;
var happy;
var HP;
var happiness;
var img;

function init(){
  img = document.getElementById("phillipImage");
  loadStateFromLocalStorage();
  var time = getSystemTime(); 
  feed(0);
  patThePhillip(0);
}
/*This functions loads the state of phillip from the computer's local storage.
The variables pulled from local storage are all strings. If the variables do not exist,
i.e. there is no record of a phillip on this machine, variables will be created.
Then the variables are parsed into their correct forms.
*/
function loadStateFromLocalStorage(){
  totalFed = myStorage.getItem('totalFed');
  totalPats = myStorage.getItem('totalPats');
  sleeping = myStorage.getItem('sleeping');

  if (totalFed == null){
    totalFed = 0;
    myStorage.setItem('totalFed', totalFed);
  }
  if (totalPats == null){
    totalPats = 0;
    myStorage.setItem('totalPats', totalPats);
  }
  if (sleeping == null){
    sleeping = false;
    myStorage.setItem('sleeping', sleeping);
  }
  if (sleeping != null && sleeping.charAt(0) == 't'){
    sleeping = true;
  } else {
    sleeping = false;
  }
  totalFed = parseInt(totalFed);
  totalPats = parseInt(totalPats);
}

function feed(amount){
  totalFed += amount;
  var health = document.getElementById("health");
  HP = totalFed / 4;
  if (HP < 0){
    HP = 0;
  } else if (HP > 100){
    HP = 100
  }
  if (HP < 25) {
    angry = true;
  } else {
    angry = false;
  }
  health.innerText = HP + " HP ";
  toggleDisplay();
  outboundStorageProcessing();
}

function toggleSleep() {
  if (sleeping){
    sleeping = false;
  } else if (!sleeping) {
    sleeping = true;
  }
  outboundStorageProcessing();
  toggleDisplay();
}

function patThePhillip(amount){
  var happinessDisplay = document.getElementById("happiness");
  totalPats += amount;
  if (totalPats < 0){
    totalPats = 0;
  } else if (totalPats > 200){
    totalPats = 200;
  }
  happiness = totalPats/2;
  happinessDisplay.innerText = happiness + " happiness";
  outboundStorageProcessing();
  if (amount > 0){
    happy = true;
  }
  if (happiness < 25){
    sad = true;
  } else {
    sad = false;
  }
  toggleDisplay();
}

function outboundStorageProcessing(){
  myStorage.setItem('totalFed', totalFed);
  myStorage.setItem('totalPats', totalPats);
  myStorage.setItem('sleeping', sleeping);
  }

function hourPassage(hours){
  var decreaseHunger = -10 * hours;
  var decreaseHappiness = -20 * hours;
  feed(decreaseHunger);
  patThePhillip(decreaseHappiness);
}

function toggleDisplay(){
  if (happy) {
    img.src = "assets/happyPhillip.png"
    happy = false;
    setTimeout(() => {toggleDisplay()}, 2000);
  } else if (sleeping){
    img.src = "assets/sleepingPhillip.png"
  } else if (sad) {
    img.src = "assets/sadPhillip.png"
  } else if (angry) {
    img.src = "assets/angryPhillip.png"
  } else {
    img.src = "assets/defaultPhillip.png"
  }
}