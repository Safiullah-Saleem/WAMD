

## **1. JavaScript (JS) vs TypeScript (TS)**

| Feature            | JavaScript                          | TypeScript                                        |
| ------------------ | ----------------------------------- | ------------------------------------------------- |
| **File extension** | `.js`                               | `.ts`                                             |
| **Typing**         | No types, variables can change type | Strong typing (you decide variable types)         |
| **Error checking** | Only at runtime (when program runs) | Errors caught while writing code (before running) |
| **Use case**       | Quick scripting                     | Large, maintainable projects                      |

💡 **Tip:** Think of TypeScript as *JavaScript + rules*.
If JS is like writing a letter without spell check, TS is like writing with grammar + spell check.

---

## **2. Installing TypeScript**

```bash
npm install -g typescript     # Install TypeScript globally
tsc --init                     # Create a TS config file
```

When you run a `.ts` file:

1. Compile TS → JS

   ```bash
   tsc script.ts
   ```
2. Run the compiled JS file

   ```bash
   node script.js
   ```

💡 **Tip:** TS can’t run directly in Node — it must be converted to JS first.

---

## **3. Variables in TS**

Syntax:

```ts
let variableName: dataType = value;
```

Example:

```ts
let username: string = "Safiullah Saleem";
let num1: number = 10;
let isUpdated: boolean = true;
let anyType: any = 123; // Can be anything
let isUnknown: unknown = "I am unknown";
let isNull: null = null;
let isUndefined: undefined = undefined;
```

💡 **Tip:**

* `any` = I don’t care what the type is.
* `unknown` = I don’t know yet, but I’ll check before using.
* Always try to avoid `any` — it’s like disabling TypeScript’s superpower.

---

## **4. Arrays in TS**

Single type:

```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Safiullah", "Saleem"];
```

Multiple types (tuple):

```ts
let person: [string, number] = ["Ammar", 1];
```

💡 **Tip:**

* **`[]`** means “many of the same type”.
* **Tuple `[string, number]`** means “fixed number of different types”.

---

## **5. Functions in TS**

Basic function:

```ts
function add(num1: number, num2: number) {
  return num1 + num2;
}
add(10, 20);
```

Function with return type:

```ts
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
```

Return array:

```ts
function getNames(): string[] {
  return ["Safiullah", "Saleem"];
}
```

Arrow function:

```ts
let addArrow = (a: number, b: number): number => {
  return a + b;
};
```

---

## **6. Loops in TS**

```ts
for (let index: number = 0; index < 20; index++) {
  console.log(index);
}
```

---

## **7. Objects in TS**

Direct definition:

```ts
let user: {
  name: string;
  age: number;
  isUpdated: boolean;
} = {
  name: "Safiullah",
  age: 22,
  isUpdated: true
};
```

Using `type` keyword (reusable):

```ts
type UserType = {
  name: string;
  age: number;
  isUpdated: boolean;
  email?: string; // optional
};

let user: UserType = {
  name: "Safiullah Saleem",
  age: 22,
  isUpdated: true
};
```

---

## **8. Union & Intersection Types**

Union (can be **one type OR another type**):

```ts
type CustomType = string | number | boolean;

let value: CustomType;
value = "Hello";
value = 42;
```

Intersection (must be **all types at once**):

```ts
type TypeA = { a: string };
type TypeB = { b: number };

type Combined = TypeA & TypeB;

let obj: Combined = { a: "Hello", b: 42 };
```

💡 **Tip:**

* **`|`** = “OR”
* **`&`** = “AND”

---

## **9. Memory Tips for TypeScript**

Here’s a way to remember everything quickly:

**"FAVOUR" rule**

* **F** → **F**ile extensions (`.js` vs `.ts`)
* **A** → **A**rrays (`[]` for many, `[type,type]` for tuple)
* **V** → **V**ariables with types (`let name: string`)
* **O** → **O**bjects (`type` keyword)
* **U** → **U**nion & Intersection types (`|` & `&`)
* **R** → **R**eturn types in functions (`:number`, `:string[]`)

And for **order of work** when coding in TS:
**Write → Compile → Run**
(`.ts` → `tsc` → `.js` → `node`)
