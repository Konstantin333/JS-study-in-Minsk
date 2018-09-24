function showValueNumber(a) {
    for (let key in a) {
        if (typeof object[key] === "number") {
            newObject[key] = object[key]
        }
    }
    return newObject;
}

const object = {a: 'qwerty', b: 2, c: [1, 2, 3], d: {c: 1, d: 2}};
const newObject = {};

const result = showValueNumber(object);
console.log(newObject);
