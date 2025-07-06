
var display = document.getElementById("display");


document.getElementById("b0").onclick = function() { display.value += "0"; };
document.getElementById("b1").onclick = function() { display.value += "1"; };
document.getElementById("b2").onclick = function() { display.value += "2"; };
document.getElementById("b3").onclick = function() { display.value += "3"; };
document.getElementById("b4").onclick = function() { display.value += "4"; };
document.getElementById("b5").onclick = function() { display.value += "5"; };
document.getElementById("b6").onclick = function() { display.value += "6"; };
document.getElementById("b7").onclick = function() { display.value += "7"; };
document.getElementById("b8").onclick = function() { display.value += "8"; };
document.getElementById("b9").onclick = function() { display.value += "9"; };
document.getElementById("dot").onclick = function() { display.value += "."; };

document.getElementById("add").onclick = function() { display.value += "+"; };
document.getElementById("sub").onclick = function() { display.value += "-"; };
document.getElementById("mul").onclick = function() { display.value += "*"; };
document.getElementById("div").onclick = function() { display.value += "/"; };


document.getElementById("eq").onclick = function() {
  display.value = eval(display.value);
};


document.getElementById("clear").onclick = function() {
  display.value = "";
};
