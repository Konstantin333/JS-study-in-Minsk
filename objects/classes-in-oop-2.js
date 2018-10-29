function accelerate(acceleration) {
  return this.speed + acceleration;
}

function brake(braking) {
  return this.speed - braking;
}

function Сar(speed) {
  this.speed = speed;
}

Сar.prototype.accelerate = accelerate;
Сar.prototype.brake = brake;

const car = new Сar(60);
console.log(car);
console.log(car.speed);
console.log(car.accelerate(20));
console.log(car.brake(30));
