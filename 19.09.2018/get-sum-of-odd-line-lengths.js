var array = ['Max', 124, 'Konstantin', 13357, 'Alex', 23, 'Anastasia'];

function getSumOfOddLengths(a) {
    var sum = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i].length % 2 !== 0) {
            var str = String(a[i]).length;
            sum += str;
        }
    }
    return sum;
}

var result = getSumOfOddLengths(array);
console.log(result);
