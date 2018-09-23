function stringsToNumbers(a) {
    const newArray = [];
    for (let i = 0; i < a.length; i++) {
        newArray.push(Number(a[i]));
    }
    return newArray;
}

const array = [];
for (let i = 1; i <= 10; i++) {
    array.push(i);
}

const result = stringsToNumbers(array);
console.log(result);
