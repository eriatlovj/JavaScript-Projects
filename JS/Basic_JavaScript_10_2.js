var text = "";
var v;
for (v = 12; v < 22; v++) { // this is a declaration setting parameters
  if (v === 20) { continue; } // this is a declaration setting parameters
  text += "The number is " + v + "<br>";
}
document.getElementById("continue_statement").innerHTML = text;