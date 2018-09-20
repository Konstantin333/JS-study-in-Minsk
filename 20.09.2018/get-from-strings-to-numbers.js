var array = ['123', '456', '89', '-124'];

function getFromStringsToNumbers(a) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        newArray.push(Number(a[i]));
    }
    return newArray;
}

var result = getFromStringsToNumbers(array);
console.log(result);
