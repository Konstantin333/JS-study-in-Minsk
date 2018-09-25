function createValueNumber(a) {
    const newObject = {};
    for (const key in a) {
        if (typeof object[key] === "number") {
            newObject[key] = object[key]
        }
    }
    return newObject;
}

const object = {a: 'qwerty', b: 2, c: [1, 2, 3], d: {c: 1, d: 2}};

const result = createValueNumber(object);
console.log(result);
