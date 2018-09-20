const array = ['Max', 124, 'Konstantin', 13357, 'Alex', 23, 'Anastasia'];

function getSumOfOddLengths(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i].length % 2 !== 0) {
            let str = String(a[i]).length;
            sum += str;
        }
    }
    return sum;
}

let result = getSumOfOddLengths(array);
console.log(result);
