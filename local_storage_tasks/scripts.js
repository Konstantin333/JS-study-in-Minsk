function addContainer(div) {
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
  container.appendChild(div);
  return container;
}

function addDiv(str) {
  const addDiv = document.createElement('div');
  addDiv.classList.add('rectangle');
  const text = document.createTextNode(str);
  text.id = 'text';
  addDiv.appendChild(text);
  return addDiv;
}

function getString(div) {
  const txt = div.textContent;
  return txt;
}

function getArrayOfDivs(arrStr){
  const newArray = [];
  arrStr.forEach(function(e){
  const addDiv = document.createElement('div');
  addDiv.classList.add('rectangle');
  const text = document.createTextNode(e);
  text.id = 'text';
  addDiv.appendChild(text);
  newArray.push(addDiv);
  })
  return newArray;
}

function getArrayOfStrings(arrDiv){
  const newArray = [];
  arrDiv.forEach(function(e){
    const txt = e.textContent;
    newArray.push(txt);
  })
  return newArray;
}

function getContainerOfDivs (arrDiv) {
  const newArray = [];
  arrDiv.forEach(function(e){
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
  container.appendChild(e);
  newArray.push(container);
  })
  return newArray;
}

function getArrayOfDivsOfContainer(contDivs) {
  const newArray = [];
  [...contDivs].forEach(function(e){
    newArray.push(e);
  })
  return newArray;
}

function getArrayOfDivsFromStrings(arr){
  const newArray = [];
  arr.forEach(e => {
    const addDiv = document.createElement('div');
    addDiv.classList.add('rectangle');
    const text = document.createTextNode(e);
    text.id = 'text';
    addDiv.appendChild(text);
    newArray.push(addDiv);
  })
  return newArray;
}

function addButton() {
  const button = document.createElement('button');
  const textOfButton = document.createTextNode('Сохранить информацию')
  button.classList.add('button');
  button.appendChild(textOfButton);
  document.body.insertBefore(button, document.body.children[0]);
  button.addEventListener('click', () => {
    const key = 'text';
    const text = 'value';
    localStorage.getItem(key);
    localStorage.setItem(key, text);
  })
}

const string = 'Hello';
const array = ['str1', 'str2', 'str3'];

const div = addDiv(string);
const getStr = getString(div);
const arrayOfDivs = getArrayOfDivs(array);
const arrayOfStrings = getArrayOfStrings(arrayOfDivs);
const containerOfDivs = getContainerOfDivs(arrayOfDivs);
const arrayOfDivsOfContainer = getArrayOfDivsOfContainer(containerOfDivs);
const arrayOfDivsFromStrings = getArrayOfDivsFromStrings(array);

const stringify = JSON.stringify(array);
const parse = JSON.parse(stringify);
