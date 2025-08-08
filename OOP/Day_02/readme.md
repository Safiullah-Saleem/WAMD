
## **1️⃣ Inheritance**

Inheritance means:

> *A child class can take (inherit) all the features of a parent class, and can also add its own features.*

Think of it like **your parents gave you some qualities** (height, eye color) but you can still have your own unique skills (coding, football).

**Syntax in JavaScript:**

```js
class Car { /* parent class */ }
class ElectricCar extends Car { /* child class */ }
```

---

## **2️⃣ Types of Inheritance**

* **Multiple Inheritance**

  > A class inherits from **more than one parent**.
  > ❌ Not directly supported in JavaScript (only single inheritance).
  > ✅ You can simulate it with *mixins*.

* **Multi-Level Inheritance**

  > Grandparent → Parent → Child.
  > Example:

  ```js
  class Vehicle { }
  class Car extends Vehicle { }
  class ElectricCar extends Car { }
  ```

  `ElectricCar` gets features from **Car** and also from **Vehicle**.

---

## **3️⃣ `super` keyword**

* In the **child constructor**, `super()` calls the **parent class’s constructor**.
* It makes sure the parent’s properties are set before adding child properties.

Example:

```js
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class ElectricCar extends Car {
    constructor(model, year, battery) {
        super(model, year); // calls Car's constructor
        this.battery = battery; // child property
    }
}
```

---

## **4️⃣ Method Overriding**

* **Same method name** in parent and child.
* The child’s method replaces (overrides) the parent’s method when called on the child.

Example:

```js
class Car {
    drive() {
        console.log("Car is driving...");
    }
}

class ElectricCar extends Car {
    drive() {
        console.log("Electric car is driving silently...");
    }
}

let eCar = new ElectricCar();
eCar.drive(); // Electric car is driving silently...
```

---

## **5️⃣ Function Overloading**

* **Same function name but different parameters**.
* JavaScript **does not** truly support function overloading like Java or C++ — the **last function definition wins**.
* You can simulate it by checking parameters:

```js
class Car {
    start(a) {
        if (a) console.log("Starting with", a);
        else console.log("Starting normally");
    }
}
```

---

## **6️⃣ Using `super.methodName()`**

* Lets you call the **parent’s version** of a method from the child’s overridden method.

Example:

```js
class Car {
    drive() {
        console.log("Car is driving...");
    }
}

class ElectricCar extends Car {
    drive() {
        super.drive(); // calls parent's drive
        console.log("Electric car is driving silently...");
    }
}

let eCar = new ElectricCar();
eCar.drive();
// Output:
// Car is driving...
// Electric car is driving silently...
```

---

### 🎯 **Quick Analogy**

* **Inheritance:** You inherit traits from parents.
* **`super` in constructor:** Saying “Hey Mom/Dad, give me my starting traits first.”
* **Method overriding:** You do the same task as your parents but in your own style.
* **Function overloading:** You do the same task but can handle it in different ways depending on how people ask you.
* **`super.method()`**: You say “Let me also do it the way my parents did before adding my own twist.”
