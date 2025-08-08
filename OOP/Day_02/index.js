// Parent class
class Car {
  model;
  year;
  make;

  constructor(a, b, c) {
    this.model = a;
    this.year = b;
    this.make = c;
  }
}

// Child class (inherits from Car)
class ElectricCar extends Car {
  charge;
  battery;

  constructor(a, b, c, d, e) {
    super(a, b, c); // call parent constructor
    this.charge = d;
    this.battery = e;
  }
}

car_1 = new Car("white",2025,"honda")
console.log(car_1)
car_2 = new ElectricCar("Model S", 2024, "Tesla", "80%", "100 kWh");
console.log(car_2);
