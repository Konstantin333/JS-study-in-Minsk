var array1 = [1, 2, 4, -25];
var array2 = [34, -23, 132, 23];
var array3 = [-122, -12, 0, -89];

var mainArray = [array1, array2, array3];

function getArrayOfLargestNumbers (a) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        var searchLargestNumber = 0;
        for (var j = 0; j < a[i].length;j++) {
            if (a[i][j] > searchLargestNumber) {
                searchLargestNumber = a[i][j];
            }
        }
        newArray.push(searchLargestNumber);
    }
    return newArray;
}

var result = getArrayOfLargestNumbers(mainArray);
console.log(result);
