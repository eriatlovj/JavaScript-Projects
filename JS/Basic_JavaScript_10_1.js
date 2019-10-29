var text = "";
var j;
for (j = 0; j < 15; j++) {
  if (j === 11) { break; }
  text += "The number is " + j + "<br>";
}
document.getElementById("break_statement").innerHTML = text;