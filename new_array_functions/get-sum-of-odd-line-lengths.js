function getSumOfOddLengths(a) {
    let sum = 0;
    a.filter(function(e){
        if (e.length % 2 !== 0) {
            let str = String(e).length;
            sum += str;
        }
    })
    return sum;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = getSumOfOddLengths(array);
console.log(result);
