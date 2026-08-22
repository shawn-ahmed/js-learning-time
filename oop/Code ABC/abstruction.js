class Car {
  start() {
    this.#checkEngine();
    this.#injectFuel();
    console.log("Car started");
  }

  #checkEngine() {
    console.log("Checking engine...");
  }

  #injectFuel() {
    console.log("Injecting fuel...");
  }
}

const car = new Car();

car.start();

//////////////////////////////////
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