function addInput() {
  const input = document.createElement('input');
  input.classList.add('input');
  const addInput = document.body.appendChild(input);
  return addInput;
}

function addToLocalStorage(){
  const key = 'text';
  const input = document.querySelector('input');
  const buttonPlus = document.querySelector('.button-plus');
  const buttonMinus = document.querySelector('.button-minus');
  input.addEventListener('keyup', () => {
    const text = input.value;
    const save = localStorage.setItem(key, text);
    return save;
  })
  buttonPlus.addEventListener('click', () => {
    const text = input.value;
    const save = localStorage.setItem(key, text);
    return save;
  })
  buttonMinus.addEventListener('click', () => {
    const text = input.value;
    const save = localStorage.setItem(key, text);
    return save;
  })
  const storedText = localStorage.getItem(key);
  if (storedText !== undefined) {
      input.value = storedText;
  }  
  return input.value;
}
  
function addButtonPlus() {
  const buttonPlus = document.createElement('button');
  buttonPlus.classList.add('button-plus');
  const textOfButton = document.createTextNode('+');
  buttonPlus.appendChild(textOfButton);
  const addButton = document.body.appendChild(buttonPlus);
  buttonPlus.addEventListener('click', () => {
    const input = document.querySelector('input');
    let text = input.value;
    let newText = ++text;
    input.value = newText;
    return newText;
  })
  return addButton;
}

function addButtonMinus() {
  const buttonMinus = document.createElement('button');
  buttonMinus.classList.add('button-minus');
  const textOfButton = document.createTextNode('-');
  buttonMinus.appendChild(textOfButton);
  const addButton = document.body.appendChild(buttonMinus);
  buttonMinus.addEventListener('click', () => {
    const input = document.querySelector('input');
    let text = input.value;
    let newText = --text;
    input.value = newText;
    return newText;
  })
  return addButton;
}

function usingKeys() {
  document.onkeydown = function(e) {
    const hotkey  = e.keyCode;
    const keyShift = e.shiftKey;
    const key = 'text';
    const input = document.querySelector('input');
    if (keyShift && hotkey  === 187) {
      let text = input.value;
      let newText = ++text;
      input.value = newText;
      localStorage.setItem(key, text);
      return newText;
    } 
    else if (keyShift && hotkey === 189) {
      let text = input.value;
      let newText = --text;
      input.value = newText;
      localStorage.setItem(key, text);
      return newText;
    } 
  }
}

function addElements(){
  addInput();
  addButtonPlus();
  addButtonMinus();
  addToLocalStorage();
  usingKeys()
}

addElements();
