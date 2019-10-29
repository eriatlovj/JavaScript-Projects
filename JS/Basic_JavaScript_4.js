function my_Dictionary() {
    var Vehicle = {
    Type: "Car",
    Make: "Toyota",
    Model: "Supra",
    Year: 2020,
    Color: "Yellow"
    };
    delete Vehicle.Model;
    document.getElementById("Dictionary").innerHTML = Vehicle.Model;
    }
    
