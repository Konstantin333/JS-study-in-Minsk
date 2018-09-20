var array = [1, 2, 34, 'Hi,', 'Max!', 123, 'How are you?'];

function copyArray (a) {
    var newArray = ['Это новый массив:']; //прописал эту строку в массиве, чтобы показать, что происходит именно копирование
    for (i = 0; i < a.length; i++) {
        newArray.push(a[i]);
    }
    return newArray;
}

var result = copyArray(array);
console.log(array); //1-й массив;
console.log(result); //новый массив с копией элементов 1-го
