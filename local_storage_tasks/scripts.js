function addRectangle(str) {
  const rectangle = document.createElement('div');
  rectangle.classList.add('rectangle');
  const text = document.createElement(str);
  const parent = document.body;
  parent.appendChild(rectangle);
  rectangle.appendChild(text);
}

const string = 'Hello';

addRectangle(string);
