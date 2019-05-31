let teslaX = {};
teslaX.model = 'X';
teslaX.make = 'Tesla';
teslaX.color = 'white';
teslaX.price = 200000;
teslaX.isAvailable = true;

console.log(teslaX.make + ' ' + teslaX.model);

function beep() {
    console.log(this.make + ' ' + this.model + ' Beep-beep');
}

teslaX.beep = beep;

teslaX.beep();

let mercedesGTR = {
    model: 'GTR',
    make: 'Mercedes',
    color: 'Silver',
    price: 200000,
    isAvailable: true,
    beep: beep
}

console.log(mercedesGTR.make + ' ' + mercedesGTR.model);
mercedesGTR.beep();

function Car(model, make, color, price, isAvailable) {
    this.model = model;
    this.make = make;
    this.color = color;
    this.price = price;
    this.isAvailable = isAvailable;
//    this.beep = beep;
    return this;
}
Car.prototype.beep = beep;

let daewooLanos = new Car('Lanos', 'Daewoo', 'green', 12000, false);
daewooLanos.beep();

console.dir(daewooLanos);

let bmwX1 = new Car('X1', 'BMW', 'grey', 30000, true);
bmwX1.beep();

console.dir(bmwX1)

class SuperCar {
    constructor(model, make, color, price, isAvailable) {
    this.model = model;
    this.make = make;
    this.color = color;
    this.price = price;
    this.isAvailable = isAvailable;
    return this;
}
    beep() {
        console.log(this.make + ' ' + this.model + ' Beep-beep');
    }
}

let ferrariLaFerrari = new SuperCar('LaFerrari', 'Ferrari', 'red', 350000, true);
ferrariLaFerrari.beep();

const ferrariF450 = Object.create(ferrariLaFerrari);
ferrariF450.model = 'F450';
ferrariF450.beep();
console.dir(ferrariF450);

const carJson = `{
    "model": "Corolla",
    "make": "Toyota",
    "color": "black",
    "isAvailable": true,
    "price": 20000
}`;

const toyotaCorolla = JSON.parse(carJson);
toyotaCorolla.beep = beep;
toyotaCorolla.beep();