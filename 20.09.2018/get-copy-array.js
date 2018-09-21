function copyArray(a) {
    const newArray = [];
    for (let i = 0; i < a.length; i++) {
        newArray.push(a[i]);
    }
    return newArray;
}

const array = [1, 2, 34, 'Hi,', 'Max!', 123, 'How are you?'];

let result = copyArray(array);
console.log(array); //1-й массив;
console.log(result); //новый массив с копией элементов 1-го
