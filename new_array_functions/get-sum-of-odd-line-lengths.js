function getSumOfOddLengths(a) {
    let sum = 0;
    let string = '';
    const filter = a.filter(function(e){return e.length % 2 !== 0})
    .forEach(function(e){string = String(e).length, sum += string;});
    return sum;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const result = getSumOfOddLengths(array);
console.log(result);
