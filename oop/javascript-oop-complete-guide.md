# জাভাস্ক্রিপ্ট OOP — সম্পূর্ণ গাইড (ধাপে ধাপে)

আমি একজন সিনিয়র জাভাস্ক্রিপ্ট ডেভেলপার হিসেবে তোমাকে OOP শেখাবো একদম শুরু থেকে। প্রতিটা ধাপ আগেরটার উপর ভিত্তি করে তৈরি — তাই ক্রম অনুযায়ী পড়ো, কোড নিজে হাতে চালিয়ে দেখো (শুধু পড়লে হবে না)।

---

## ধাপ ০: OOP আসলে কী, কেন শিখবে

OOP (Object-Oriented Programming) মানে হলো — কোড লেখার একটা স্টাইল, যেখানে আমরা রিয়েল ওয়ার্ল্ডের জিনিস (যেমন: User, Car, BankAccount) কে **অবজেক্ট** হিসেবে মডেল করি। প্রতিটা অবজেক্টের থাকে:
- **Properties (ডেটা)** — যেমন একটা Car-এর color, brand, speed
- **Methods (আচরণ)** — যেমন Car-এর accelerate(), brake()

**কেন দরকার?**
- কোড রিইউজেবল হয়
- কোড organize করা সহজ হয়
- বড় প্রজেক্ট ম্যানেজ করা সহজ হয়

JS-এ OOP একটু আলাদা — এটা **prototype-based**, Java/C# এর মতো pure class-based না। এটা বোঝা তোমার জন্য সবচেয়ে গুরুত্বপূর্ণ অংশ, তাই আমরা এটা ধীরে ধীরে কভার করবো।

---

## ধাপ ১: Object তৈরি করার সবচেয়ে সহজ উপায় — Object Literal

```javascript
const user = {
  name: "Rafiq",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet(); // Hello, my name is Rafiq
```

- `user` একটা অবজেক্ট, `name`/`age` হলো properties, `greet` হলো method।
- এটা এক-বার-ব্যবহারের অবজেক্টের জন্য ভালো। কিন্তু ধরো তোমার ১০০টা user দরকার — প্রতিবার লিখবে? না। এখান থেকেই OOP-এর দরকার শুরু।

**অনুশীলন:** একটা `book` অবজেক্ট বানাও যার `title`, `author`, আর `getSummary()` মেথড থাকবে।

---

## ধাপ ২: `this` কীওয়ার্ড বোঝা (খুবই গুরুত্বপূর্ণ)

`this` মানে "যে অবজেক্ট এই মুহূর্তে মেথডটা কল করছে, সে"।

```javascript
const user = {
  name: "Rafiq",
  greet() {
    console.log(this.name); // "this" = user
  }
};
user.greet(); // Rafiq

const greetFn = user.greet;
greetFn(); // undefined (কারণ এখন কোনো অবজেক্ট থেকে কল হয়নি)
```

**নিয়ম:** `this` নির্ভর করে **কীভাবে ফাংশনটা কল হচ্ছে**, কোথায় ডিফাইন করা হয়েছে তার উপর না। এটাই প্রথমবার শেখার সময় সবচেয়ে বেশি কনফিউশন তৈরি করে — এটা মাথায় গেঁথে নাও।

Arrow function-এর `this` আলাদাভাবে কাজ করে — এটা নিজের `this` তৈরি করে না, বাইরের স্কোপ থেকে ধার নেয়। এটা ধাপ ৫-এ আবার আসবে।

---

## ধাপ ৩: Constructor Function — একই ধরনের অনেক অবজেক্ট বানানো

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const user1 = new User("Rafiq", 25);
const user2 = new User("Karim", 30);

user1.greet(); // Hi, I'm Rafiq
user2.greet(); // Hi, I'm Karim
```

**`new` কীওয়ার্ড যখন কল হয়, তখন ৪টা ধাপে কাজ হয়:**
1. একটা নতুন খালি অবজেক্ট `{}` তৈরি হয়
2. `this` ওই নতুন অবজেক্টকে পয়েন্ট করে
3. ফাংশন বডি এক্সিকিউট হয় (properties সেট হয়)
4. অবজেক্টটা রিটার্ন হয়

**সমস্যা:** উপরের কোডে প্রতিটা `new User()` কল করলে একটা **নতুন** `greet` ফাংশন মেমোরিতে তৈরি হচ্ছে — যদিও কাজ একই। এটা মেমোরি নষ্ট করে। সমাধান পরের ধাপে।

---

## ধাপ ৪: Prototype ও Prototype Chain

সব ফাংশনের একটা `.prototype` প্রপার্টি থাকে। এখানে মেথড রাখলে সেটা সব ইনস্ট্যান্স শেয়ার করে (একবারই মেমোরিতে থাকে)।

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const user1 = new User("Rafiq", 25);
const user2 = new User("Karim", 30);

user1.greet(); // Hi, I'm Rafiq — greet একই জায়গা থেকে আসছে
console.log(user1.greet === user2.greet); // true
```

**Prototype Chain কীভাবে কাজ করে:**
যখন `user1.greet()` কল করো, JS প্রথমে `user1`-এর নিজের প্রপার্টিতে খোঁজে। না পেলে `user1.__proto__` (যা `User.prototype`) এ খোঁজে। এভাবে চেইন ধরে উপরে উঠতে থাকে যতক্ষণ না পায় বা `null`-এ পৌঁছায়।

```javascript
console.log(user1.__proto__ === User.prototype); // true
console.log(User.prototype.__proto__ === Object.prototype); // true
```

এটাই JS-এর ইনহেরিটেন্সের ভিত্তি — এটা "prototypal inheritance"।

---

## ধাপ ৫: ES6 Class — আধুনিক সিনট্যাক্স (আসলে prototype-এর উপরেই বানানো)

`class` নতুন কোনো ফিচার না — এটা prototype-ভিত্তিক কোডকে সুন্দরভাবে লেখার একটা উপায় ("syntactic sugar")।

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const user1 = new User("Rafiq", 25);
user1.greet(); // Hi, I'm Rafiq

console.log(typeof User); // "function" — এখনো ভিতরে ফাংশনই!
```

আজকাল প্রায় সবাই `class` সিনট্যাক্স ব্যবহার করে, তাই এখন থেকে আমরা এটাই ব্যবহার করবো। কিন্তু মনে রাখবে — ভিতরে prototype-ই কাজ করছে।

---

## ধাপ ৬: Encapsulation — ডেটা লুকানো ও সুরক্ষিত রাখা

Encapsulation মানে: একটা অবজেক্টের ভিতরের ডেটা বাইরে থেকে সরাসরি নাগাল না পাওয়া, বরং নির্দিষ্ট মেথডের মাধ্যমেই অ্যাক্সেস করা।

```javascript
class BankAccount {
  #balance; // Private field — বাইরে থেকে অ্যাক্সেস করা যাবে না

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("Amount must be positive");
      return;
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance");
      return;
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Rafiq", 1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500
console.log(acc.#balance); // ❌ SyntaxError — বাইরে থেকে অ্যাক্সেস নেই
```

`#` দিয়ে শুরু করা field হলো **private field** (ES2022+)। এটা encapsulation বাস্তবায়নের আধুনিক উপায়। কেন দরকার? যাতে কেউ ভুলবশত বা ইচ্ছাকৃতভাবে সরাসরি `balance = -5000` সেট করে দিতে না পারে — সব পরিবর্তন নিয়ন্ত্রিত মেথডের মধ্য দিয়ে যেতে হয়।

---

## ধাপ ৭: Getters ও Setters

Property-র মতো দেখতে কিন্তু আসলে ফাংশন — ডেটা অ্যাক্সেস/পরিবর্তনের সময় লজিক চালানোর জন্য।

```javascript
class BankAccount {
  #balance;

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  get balance() {
    return `৳${this.#balance}`;
  }

  set balance(value) {
    if (value < 0) {
      console.log("Balance can't be negative");
      return;
    }
    this.#balance = value;
  }
}

const acc = new BankAccount("Rafiq", 1000);
console.log(acc.balance); // ৳1000  (মেথড কিন্তু () ছাড়াই কল হচ্ছে)
acc.balance = 2000;       // set হচ্ছে, কিন্তু ভ্যালিডেশনসহ
```

---

## ধাপ ৮: Inheritance — একটা ক্লাস আরেকটার থেকে বৈশিষ্ট্য পাওয়া

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // বাবা ক্লাসের constructor কল করা — বাধ্যতামূলক
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} barks: Woof!`); // Override করা হলো
  }
}

const dog = new Dog("Tommy", "Labrador");
dog.eat();       // Tommy is eating  (Animal থেকে পাওয়া)
dog.makeSound(); // Tommy barks: Woof!  (Dog নিজেরটা ব্যবহার করলো)
```

**খেয়াল রাখো:**
- `extends` দিয়ে ইনহেরিটেন্স হয়
- `super(...)` দিয়ে parent-এর constructor কল করতে হয় — child class-এ constructor থাকলে এটা প্রথম লাইনে লিখতে হবে
- `super.methodName()` দিয়ে parent-এর মেথডও কল করা যায়

---

## ধাপ ৯: Polymorphism — একই মেথড নাম, আলাদা আচরণ

উপরের `makeSound()` উদাহরণটাই polymorphism। একই ইন্টারফেস (`makeSound()`), কিন্তু প্রতিটা ক্লাসে আলাদা বাস্তবায়ন।

```javascript
class Cat extends Animal {
  makeSound() {
    console.log(`${this.name} says: Meow!`);
  }
}

const animals = [new Dog("Tommy", "Labrador"), new Cat("Whiskers")];

animals.forEach(animal => animal.makeSound());
// Tommy barks: Woof!
// Whiskers says: Meow!
```

লক্ষ্য করো — আমরা `forEach`-এর ভিতরে চেক করিনি "এটা Dog না Cat"। প্রতিটা অবজেক্ট নিজে জানে তার `makeSound()` কীভাবে কাজ করবে। এটাই polymorphism-এর শক্তি — কোড সহজ ও এক্সটেনসিবল হয়।

---

## ধাপ ১০: Abstraction — জটিলতা লুকানো, শুধু দরকারি অংশ দেখানো

Abstraction মানে ইউজারকে শুধু "কী করে" দেখানো, "কীভাবে করে" সেটার জটিলতা লুকিয়ে রাখা।

```javascript
class CoffeeMachine {
  #heatWater() {
    console.log("Heating water...");
  }

  #grindBeans() {
    console.log("Grinding beans...");
  }

  makeCoffee() { // পাবলিক ইন্টারফেস — সহজ
    this.#heatWater();
    this.#grindBeans();
    console.log("Coffee is ready!");
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee(); // ইউজার শুধু এটুকুই জানে, ভিতরের ৩টা ধাপ জানার দরকার নেই
```

JS-এ pure abstract class নেই (Java-র মতো), কিন্তু আমরা এই প্যাটার্ন দিয়ে বা নিচের মতো করে সিমুলেট করতে পারি:

```javascript
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Shape is abstract, cannot instantiate directly");
    }
  }
  area() {
    throw new Error("area() must be implemented by subclass");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

const c = new Circle(5);
console.log(c.area().toFixed(2)); // 78.54
```

---

## ধাপ ১১: Static Members — ক্লাসের নিজস্ব, ইনস্ট্যান্সের নয়

```javascript
class MathUtils {
  static PI = 3.14159;

  static square(n) {
    return n * n;
  }
}

console.log(MathUtils.PI);        // 3.14159
console.log(MathUtils.square(5)); // 25

const m = new MathUtils();
console.log(m.square); // undefined — instance থেকে অ্যাক্সেস করা যায় না
```

`static` ব্যবহার হয় এমন কিছুর জন্য যা ক্লাসের সাথে সম্পর্কিত, কিন্তু কোনো নির্দিষ্ট ইনস্ট্যান্সের সাথে না। যেমন utility ফাংশন, counter, বা ফ্যাক্টরি মেথড।

---

## ধাপ ১২: চারটা স্তম্ভ (Four Pillars) — সংক্ষিপ্ত সারাংশ

| স্তম্ভ | মানে | JS-এ কীভাবে |
|---|---|---|
| **Encapsulation** | ডেটা ও লজিক একসাথে বেঁধে রাখা, বাইরে থেকে সরাসরি অ্যাক্সেস আটকানো | `#privateField`, getter/setter |
| **Abstraction** | জটিলতা লুকিয়ে সহজ ইন্টারফেস দেওয়া | পাবলিক মেথড দিয়ে প্রাইভেট মেথড র‍্যাপ করা |
| **Inheritance** | এক ক্লাস আরেক ক্লাসের বৈশিষ্ট্য পায় | `extends`, `super` |
| **Polymorphism** | একই মেথড, ভিন্ন বাস্তবায়ন | method overriding |

---

## ধাপ ১৩: Bonus — `instanceof`, `Object.create`, ও একটা কমন ভুল

```javascript
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true — কারণ inheritance chain এ আছে

// Object.create দিয়ে prototype সরাসরি সেট করা যায়
const animalProto = {
  eat() { console.log(`${this.name} eats`); }
};
const rabbit = Object.create(animalProto);
rabbit.name = "Bunny";
rabbit.eat(); // Bunny eats
```

**কমন ভুল যেটা বিগিনাররা করে:** Arrow function-কে class method হিসেবে prototype-এ বসানো যায় না ঠিকভাবে যদি regular method দরকার হয় override-এর জন্য — কারণ arrow function-এর নিজের `this` binding থাকে না prototype অনুযায়ী। Class-এর ভিতরে সাধারণত normal method syntax (`methodName() {}`) ব্যবহার করাই সঠিক অভ্যাস, arrow function শুধু callback-এর ভিতরে `this` ধরে রাখতে দরকার হলে ব্যবহার করবে।

---

## এখন তোমার পালা — অনুশীলন

নিচের কাজটা নিজে করার চেষ্টা করো:

1. একটা `Vehicle` ক্লাস বানাও — এতে `brand`, `#fuel` (private), `startEngine()`, আর `getFuel()`/`setFuel()` (getter-setter) থাকবে।
2. `Car` ও `Bike` ক্লাস বানাও যেগুলো `Vehicle` থেকে `extends` করবে, এবং প্রতিটার নিজস্ব `honk()` মেথড থাকবে (polymorphism)।
3. একটা static মেথড `Vehicle.compareFuel(v1, v2)` বানাও যেটা দুটো vehicle-এর fuel তুলনা করবে।

তুমি কোড লিখে আমাকে দেখালে আমি রিভিউ করে ফিডব্যাক দেবো — এটাই শেখার সবচেয়ে কার্যকর উপায়।
