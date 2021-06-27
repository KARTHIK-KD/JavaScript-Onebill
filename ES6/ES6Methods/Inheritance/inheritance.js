class Vehicle {
    constructor(name, model) {
    this.name = name;
    this.model = model;
    }
   
    getName() {
    return this.name;
    }
   
    getModel() {
    return this.model;
    }
   }
   
   class Car extends Vehicle {
    constructor(name) {
    super(name, "Newcar");
    }
   
    getName() {
    return "Its My Car : " + super.getName();
    }
   }
   
   let car = new Car('Benz');
   console.log(car.getName());
   console.log(car.getModel());