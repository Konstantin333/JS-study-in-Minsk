function lengthACircle(radius) {
  return 2 * Math.PI * radius;
}

function areaOfACircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function getCircle(radius, color) {
  const array = new Array();
  if (typeof radius === 'number' && typeof color === 'string') {
    array.radius = radius;
    array.color = color;
  } else if (typeof radius === 'string' && typeof color === 'number') {
    array.radius = color;
    array.color = radius;
  } else {
    return undefined;
  }
  array.lengthACircle = lengthACircle(array.radius);
  array.areaOfACircle = areaOfACircle(array.radius);
  return array;
}

function changeColor(object, newColor) {
  return object.color = newColor;
}

function changeRadius(object, newRadius) {
  return object.radius = newRadius;
}

const circle1 = new getCircle('red', 8);
const circle2 = new getCircle(12, 'blue');

console.log(circle1);
console.log(circle2);

changeColor(circle1, 'green');
changeRadius(circle2, 5);

console.log(circle1);
console.log(circle2);
