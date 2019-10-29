var text = "";
var v;
for (v = 12; v < 22; v++) {
  if (v === 20) { continue; }
  text += "The number is " + v + "<br>";
}
document.getElementById("continue_statement").innerHTML = text;