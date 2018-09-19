var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSum(a) {
    var sum = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

var result = getSum(array);
console.log(result);
