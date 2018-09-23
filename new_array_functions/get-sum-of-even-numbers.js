function getSumOfEvenNumbers(a) {
    let sum = 0;
    a.filter(function(e){
        if (e % 2 === 0){
            sum += e;
        }
    })
    return sum;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = getSumOfEvenNumbers(array);
console.log(result);
