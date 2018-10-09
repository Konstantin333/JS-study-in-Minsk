const ITEMS_KEY = 'items';
const newArray = loadItems();

init();

function init() {
  const button = document.querySelector('button');
  button.addEventListener('click', onAddButtonClick);
}

function onAddButtonClick() {
  const input = document.querySelector('input');
  const div = addDiv(input.value);
  newArray.push(div);
  saveItems(newArray);
  input.value = '';
  input.focus();
}

function addDiv(value) {
  const container = document.createElement('div');
  container.classList.add('container', 'animated');
  const div = document.createElement('div');
  div.classList.add('rectangle');
  const text = document.createTextNode(value);
  const del = document.createElement('img');
  del.src = './del.jpg';
  del.classList.add('del');
  del.addEventListener('click', onDeleteButtonClick);
  div.appendChild(text);
  container.appendChild(div);
  container.appendChild(del);
  document.body.appendChild(container);
  return container;
}

function getDivText(div) {
  return div.textContent;
}

function saveItems(items) {
  const itemsStr = JSON.stringify(items.map(div => getDivText(div)));
  localStorage.setItem(ITEMS_KEY, itemsStr);
}

function loadItems() {
  const itemsStr = localStorage.getItem(ITEMS_KEY);
  if (!itemsStr) {
    return [];
  }
  const items = JSON.parse(itemsStr).map(text => addDiv(text));
  return items;
}

function onDeleteButtonClick() {
  const div = this.parentElement;
  const index = newArray.indexOf(div);
  if (index === -1) {
    return;
  }
  delDiv(div);
  newArray.splice(index, 1);
  saveItems(newArray);
}

function delDiv(child) {
  child.classList.remove('animated');
  setTimeout(() => {
    child.classList.add('animated', 'reverse');
    setTimeout(() => {
      document.body.removeChild(child);
    }, 500);
  });
}
