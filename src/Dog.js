//DerivedClass
import Animal from "./Animal";
export default class Dog extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs), (this.age = age);
  }
}
