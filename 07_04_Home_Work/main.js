class Car {
    constructor (brand, number, power) {
        this.brand = brand;
        this.cylinders = number;
        this.power = power;
    }

    Specification (brand, cylinders, power) {
        console.log( '(${this.brand}) - Имеет ${this.cylinders} и мощность ${this.power} л.с.}')
    }
};

class Track extends Car {
    constructor(capacity) {
        this.capacity = capacity;
    }
};

const audi = new Car('Audi', 8, 240);
audi.Specification('Audi', 8, 240)
console.log(audi,);