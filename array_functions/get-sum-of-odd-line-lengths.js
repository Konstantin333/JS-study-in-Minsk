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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = getSumOfOddLengths(array);
console.log(result);
