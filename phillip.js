myStorage = window.localStorage;
var totalFed;
var totalPats;
inboundStorageProcessing();

function inboundStorageProcessing(){
  totalFed = myStorage.getItem('totalFed');
  totalPats = myStorage.getItem('totalPats');
  sleeping = myStorage.getItem('sleeping');

  if (totalFed == null){
    totalFed = '0';
    myStorage.setItem('totalFed', totalFed);
  }
  if (totalPats == null){
    totalPats = '0';
    myStorage.setItem('totalPats', totalPats);
  }
  if (sleeping == null){
    sleeping = 'f';
    myStorage.setItem('sleeping', sleeping);
  }
  totalFed = parseInt(totalFed);
  totalPats = parseInt(totalPats);
  if (sleeping == 'f'){
    sleeping = false;
  } else if (sleeping == 't'){
    sleeping = true;
  }
}

function feed(amount){
  totalFed += amount;
  var health = document.getElementById("health");
  health.innerText = totalFed/4 + " HP ";
  outboundStorageProcessing();
}

function sleepingIcon() {
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

function pat(amount){
  var icon = document.getElementById("icon");
  var pats = document.getElementById("petting");
  totalPats += amount;
  outboundStorageProcessing();
  pats.innerText = totalPats + " Pats";
  if (amount > 0){
    icon.innerText = "≧◡≦";
  }
  setTimeout(() => {icon.innerText = "(●´ω｀●)"}, 2000);
}

function outboundStorageProcessing(){
  myStorage.setItem('totalFed', totalFed.toString());
  myStorage.setItem('totalPats', totalPats.toString());
  if (sleeping){
    myStorage.setItem('sleeping', 't');
  } else if (!sleeping) {
    myStorage.setItem('sleeping', 'f');
  }
}