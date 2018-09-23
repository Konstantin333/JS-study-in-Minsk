const array = [];
for (let i = 1; i <= 10; i++) {
    array.push(i);
}

const numbersToString = array.map(function(e){
    return String(e);
});

console.log(array);
console.log(numbersToString);
