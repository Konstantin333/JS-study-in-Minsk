function setAcceleration(acceleration) {
  return this.speed + acceleration;
}

function setBraking(braking) {
  return this.speed - braking;
}

function Сars(speed) {
  this.speed = speed;
}

Сars.prototype.setAcceleration = setAcceleration;
Сars.prototype.setBraking = setBraking;

const car = new Сars(60);
console.log(car);
console.log(car.speed);
console.log(car.setAcceleration(20));
console.log(car.setBraking(30));
