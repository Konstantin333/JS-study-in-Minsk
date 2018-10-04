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

const string = 'Hello';
const array = ['str1', 'str2', 'str3'];

const div = addDiv(string);
const arrayOfDivs = getArrayOfDivs(array);
const arrayOfStrings = getArrayOfStrings(arrayOfDivs);
const containerOfDivs = getContainerOfDivs(arrayOfDivs);
const arrayOfDivsOfContainer = getArrayOfDivsOfContainer(containerOfDivs);

const stringify = JSON.stringify(array);
const parse = JSON.parse(stringify);
