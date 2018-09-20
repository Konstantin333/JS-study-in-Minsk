const array = ['123', '456', '89', '-124'];

function getFromStringsToNumbers(a) {
    const newArray = [];
    for (let i = 0; i < a.length; i++) {
        newArray.push(Number(a[i]));
    }
    return newArray;
}

let result = getFromStringsToNumbers(array);
console.log(result);
