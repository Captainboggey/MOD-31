class Vehicle{
    constructor(carName,speed){
        this.carName= carName;
        this.speed =speed;
    }
}


class Bus extends Vehicle{
   constructor(carName,speed,weight){
    super(carName,speed);
    this.weight=weight
   }
}

class Truck extends Vehicle{
    constructor(carName,speed,root){
        super(carName,speed);
        this.root=root;
    }
}

const v1 = new Vehicle('toyota',50);
console.log(v1);
const b1 =new Bus('eicher',70,185000);
console.log(b1);
const t1 =new Truck('JAC',20,'chittagong');
console.log(t1)