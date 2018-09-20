var array = [];
for (var i = 1; i <= 100; i++) {
    array.push(i)
}

function getArrayOfMultipleFour (a) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 4 === 0) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

var result = getArrayOfMultipleFour(array);
console.log(result);
