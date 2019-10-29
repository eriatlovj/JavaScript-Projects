document.getElementById("Nested_Function").innerHTML = add();
function add() {
  var counter = 1;
  function plus() {counter += 3;}
  plus();  
  return counter; 
}
    
