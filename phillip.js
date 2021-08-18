myStorage = window.localStorage;
var totalFed;
var totalPats;
var sleeping;
loadStateFromLocalStorage();

function init(){
  loadStateFromLocalStorage();
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
  totalFed = parseInt(totalFed);
  totalPats = parseInt(totalPats);
}

function feed(amount){
  totalFed += amount;
  var health = document.getElementById("health");
  health.innerText = totalFed/4 + " HP ";
  outboundStorageProcessing();
}

function toggleSleep() {
  if (sleeping){
    sleeping = false;
  } else if (!sleeping) {
    sleeping = true;
  }
  var icon = document.getElementById("icon");
  if(!sleeping){
   icon.innerText = "(●´ω｀●)";
 } else {
    icon.innerText = "(︶｡︶✽)"
 }
 outboundStorageProcessing();

}

function patThePhillip(amount){
  var pats = document.getElementById("petting");
  totalPats += amount;
  pats.innerText = totalPats + " Pats";
  outboundStorageProcessing();
  if (amount > 0){
    toggleHappy(document.getElementById("icon"));
  }
}

function toggleHappy(icon){
  icon.innerText = "≧◡≦";
  setTimeout(() => {icon.innerText = "(●´ω｀●)"}, 2000);
}

function outboundStorageProcessing(){
  myStorage.setItem('totalFed', totalFed);
  myStorage.setItem('totalPats', totalPats);
  myStorage.setItem('sleep', sleeping);
  }