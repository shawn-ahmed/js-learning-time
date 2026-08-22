class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog says Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat says Meow!");
  }
}


const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.speak(); // Animal makes a sound
dog.speak();    // Dog says Woof!
cat.speak();    // Cat says Meow!