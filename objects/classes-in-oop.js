function getLength() {
  return 2 * Math.PI * this.radius;
}

function getArea() {
  return Math.PI * Math.pow(this.radius, 2);
}

function setColor(newColor) {
  this.color = newColor;
}

function setRadius(newRadius) {
  this.radius = newRadius;
}

function createCircle(radius, color) {
  const circle = {};

  circle.radius = radius;
  circle.color = color;
  circle.getLength = getLength;
  circle.getArea = getArea;
  circle.setRadius = setRadius;
  circle.setColor = setColor;

  return circle;
}

function Circle(radius, color) {
  this.radius = radius;
  this.color = color;
}

Circle.prototype.getLength = getLength;
Circle.prototype.getArea = getArea;
Circle.prototype.setRadius = setRadius;
Circle.prototype.setColor = setColor;

function Ellipse(radius, radius2, color) {
  Circle.call(this, radius, color);
  this.radius2 = radius2;
}

// Ellipse.prototype = {};
// Ellipse.prototype.__proto__ = Circle.prototype;
Ellipse.prototype = Object.create(Circle.prototype);

Ellipse.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius2;
};
Ellipse.prototype.getLength = function () {
  throw new Error('dinah');
};
Ellipse.prototype.setRadius2 = function (radius2) {
  this.radius2 = radius2;
}

class Box {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    // private
    this._count = 0;
  }

  getVolume() {
    this._count++;
    return this.a * this.b * this.c;
  }

  _setSide(side, value) {
    this[side] = value;
  }

  getCount() {
    return this._count;
  }

  setA(a) {
    this._setSide('a', a);
  }

  setB(b) {
    this._setSide('b', b);
  }

  setC(c) {
    this._setSide('c', c);
  }
}

const circle = new Circle(12, 'blue');
console.log(circle.constructor.name);
console.log(circle.radius);
console.log(circle.color);
console.log(circle.getLength());
console.log(circle.getArea());
circle.setRadius(10);
console.log(circle.getArea());

// ellipse.__proto__ = Ellipse.prototype;
const ellipse = new Ellipse(1, 2, 'red');

console.log(ellipse.getArea());
console.log(ellipse.radius2);

const box = new Box(1, 2, 3);
console.log(box.getVolume());
console.log(box.getCount());
