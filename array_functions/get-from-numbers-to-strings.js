function numbersToString(a) {
    const newArray = [];
    for (let i = 0; i < a.length; i++) {
        newArray.push(String(a[i]));
    }
    return newArray;
}

const array = [];
for (let i = 1; i <= 10; i++) {
    array.push(i);
}


const result = numbersToString(array);
console.log(result);
