function showDetails(car) {
    var carType = car.getAttribute("data-car-type");
    alert("The " + car.innerHTML + " is made by " + carType + ".");
  }