function switch_Function() {
    var text;
    var faveFood = prompt("What's your favorite Japanese food?", "Sushi");
    switch(faveFood) {
        case "Nigiri":
            text = "Execellent choice. Very refereshing.";
            break
        case "Sashimi":
            text = "I love fresh fish.";
            break
        case "Sushi":
            text = "Wow! It's my favorite too!";    
            break;
        default:
            text = "I haven't tried that one yet...";
    }
    document.getElementById("faveFood").innerHTML = text;
}

var c = document.getElementById("circle");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

var c = document.getElementById("gradient");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"green");
grd.addColorStop(1,"blue");
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);