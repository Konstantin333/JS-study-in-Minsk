const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSumOfEvenNumbers(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            sum += a[i];
        }
    }
    return sum;
}

let result = getSumOfEvenNumbers(array);
console.log(result);
