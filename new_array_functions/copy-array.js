const array = [1, 2, 34, 'Hi,', 'Max!', 123, 'How are you?'];

//1 ВАРИАНТ РЕШЕНИЯ (метод .slice):
const slicedArray = array.slice(0, array.length);
console.log(slicedArray);

//2 ВАРИАНТ РЕШЕНИЯ (метод .map):
const mappedArray = array.map(function(e) {
    return e;
});
console.log(mappedArray);

//3 ВАРИАНТ РЕШЕНИЯ (метод spread [...]):
const spreadedArray = [...array];
console.log(spreadedArray);

//4 ВАРИАНТ РЕШЕНИЯ (метод .forEach):
const newArray = [];
const forEachedArray = array.forEach(function(e) {
    newArray.push(e);
});
console.log(newArray);

//5 ВАРИАНТ РЕШЕНИЯ (метод .concat):
const newArray2 = array.concat();
console.log(newArray2);
