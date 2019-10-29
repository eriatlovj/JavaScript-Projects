function concat_Function() {
    var a = ["Sorry", "For"];
    var b = ["Wasting", "You're", "Time"];
    var result = a.concat(b); 
    document.getElementById("demo1").innerHTML = result;
  }

  function slice_Function() {
    var a = ["Sorry", "For", "Wasting", "You're", "Time"];
    var result = a.slice(2, 4);
    document.getElementById("demo2").innerHTML = result;
  } 

  function toString_Function() {
    var a = 32;
    var b = a.toString();
    document.getElementById("demo3").innerHTML = b;
  }

  function toPrecision_Function() {
    var num = 6.9696969;
    document.getElementById("demo4").innerHTML = num.toPrecision(2);
  }

