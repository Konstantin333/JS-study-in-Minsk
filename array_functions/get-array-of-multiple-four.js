function getArrayOfMultipleFour (a) {
    const newArray = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 4 === 0) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

const array = [];
for (let i = 1; i <= 100; i++) {
    array.push(i)
}

const result = getArrayOfMultipleFour(array);
console.log(result);