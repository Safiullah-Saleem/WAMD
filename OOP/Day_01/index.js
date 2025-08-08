class Car {
  make;
  model;
  year;
  constructor(a, b, c) {
    this.make = a;
    this.model = b;
    this.year = c;
  }
  start() {
    console.log("This is going to start");
  }
  stop() {
    console.log("This is going to stop");
  }
}

let car = new Car("honda", "city", 2025);
car.start();
console.log(car);

car.stop();
