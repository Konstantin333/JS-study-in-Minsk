const array = [];
for (let i = 1; i <= 100; i++) {
    array.push(i)
}

const getArrayOfMultipleFour = array.filter(function(e) {
    return e % 4 === 0;
})

console.log(getArrayOfMultipleFour);
