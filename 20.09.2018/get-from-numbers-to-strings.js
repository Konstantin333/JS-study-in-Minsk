const array = [];
for (let i = 1; i <= 10; i++) {
    array.push(i);
}

function getFromNumbersToStrings (a) {
    const newArray = [];
    for (let i = 0; i < a.length; i++) {
        newArray.push(String(a[i]));
    }
    return newArray;
}

let result = getFromNumbersToStrings(array);
console.log(result);
