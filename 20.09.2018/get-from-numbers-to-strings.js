var array = [];
for (var i = 1; i <= 10; i++) {
    array.push(i);
}

function getFromNumbersToStrings (a) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        newArray.push(String(i));
    }
    return newArray;
}

var result = getFromNumbersToStrings(array);
console.log(result);
