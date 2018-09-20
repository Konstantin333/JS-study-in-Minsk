var array1 = [1, 23, -23, 12],
array2 = [23, 45, 0, -2],
array3 = [10, 11, 12, 13, -13, -12, -11, -10, 0],
mainArray = [array1, array2, array3];

function getArrayWithLargestSum(a) { 
    var first = a[0],
    second = a[1],
    sum1 = 0,
    sum2 = 0;
    for (var i = 1; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            sum1 += second[j];
            sum2 += first[j];
            if (sum1 > sum2) {
                first = second;
                second = a[i];
            } else {
                second = a[i];
            }
        }
    }
    return first;
}

var result = getArrayWithLargestSum(mainArray);
console.log(result);
