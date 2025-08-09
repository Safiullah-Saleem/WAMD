## 🟦 What is OOP (Object-Oriented Programming) in JavaScript?

OOP is a way to organize your code using **objects**.

Think like this:

- A **car** has:

  - Properties: `color`, `model`, `speed`
  - Actions: `start()`, `stop()`

In JavaScript, you use **classes** to create objects.

```js
class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  start() {
    console.log("Car is starting...");
  }
}

let myCar = new Car("red", 100);
myCar.start(); // prints: Car is starting...
```

---

## 🟨 What is Functional Programming in JavaScript?

Functional programming uses **functions** instead of classes and objects. It focuses on **doing work with pure functions**.

Pure function = Same input → Same output, no changes outside.

Example:

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // prints: 5
```

You **don’t need a class**. Just use functions to get things done.

---

## 🔄 Difference Between OOP and Functional Programming

| Feature                   | OOP (Object-Oriented) | Functional Programming     |
| ------------------------- | --------------------- | -------------------------- |
| Based on                  | Classes and objects   | Functions                  |
| Code organized in         | Objects with methods  | Functions                  |
| Changes allowed?          | Yes (mutates data)    | Usually no (uses new data) |
| Easy to model real things | Yes (Car, User, etc.) | Not always                 |
| Example                   | `myCar.start()`       | `start(myCar)`             |

---

## 🧠 Where Do We Use OOP and Functional Programming?

- **OOP:**

  - Games, apps, websites (with users, products, etc.)
  - Examples: React, Angular (use components = objects)

- **Functional:**

  - Math-based apps, data processing, clean functions
  - Example: JavaScript’s `.map()`, `.filter()`, `.reduce()` are functional

---

## 🧱 How to Declare a Class in JavaScript?

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

let dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.
```

---

## 🔷 What Are the 4 Pillars of OOP in JavaScript?

| Pillar           | Simple Explanation             | Example in JS                         |
| ---------------- | ------------------------------ | ------------------------------------- |
| 1. Encapsulation | Hide data inside class         | Use `this.name` in class              |
| 2. Abstraction   | Show only what's needed        | `car.start()` hides engine logic      |
| 3. Inheritance   | Child class uses parent’s code | `class Dog extends Animal`            |
| 4. Polymorphism  | One method, many uses          | `speak()` sounds different in Dog/Cat |

👉 Let’s see it:

```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

let pet = new Dog();
pet.speak(); // Dog barks
```

---

## 🛠 What is a Constructor in JavaScript?

A **constructor** is a special method inside a class that runs **automatically** when we create a new object.

```js
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let s1 = new Student("Ali", 12);
console.log(s1.name); // Ali
```

---

## 🆚 What is the Difference Between a Method and a Function?

| Feature      | Function           | Method                     |
| ------------ | ------------------ | -------------------------- |
| Belongs to   | Nothing, just code | Belongs to an object/class |
| Called by    | `add(2, 3)`        | `car.start()`              |
| Uses `this`? | No                 | Yes                        |

🔹 **Function Example:**

```js
function sayHello() {
  console.log("Hello!");
}

sayHello(); // Hello!
```

🔹 **Method Example:**

```js
class Car {
  start() {
    console.log("Car is starting");
  }
}

let car1 = new Car();
car1.start(); // Car is starting
```

---

## 🎓 Summary (Quick Revision)

| Topic            | Meaning (Easy words)                                  |
| ---------------- | ----------------------------------------------------- |
| OOP              | Group data + actions using objects and classes        |
| Functional Prog. | Use only functions to do things, no objects           |
| Class            | Blueprint for creating objects                        |
| Constructor      | Special method that runs when object is created       |
| Method           | Function inside a class                               |
| Function         | Regular code that does something                      |
| 4 Pillars of OOP | Encapsulation, Abstraction, Inheritance, Polymorphism |
