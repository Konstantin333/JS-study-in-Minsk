const array = [];
for (let i = 1; i <= 100; i++) {
    array.push(i)
}

const getArrayOfMultipleFour = array.filter(function(e) {
    if (e % 4 === 0) {
        return e;
    }
})

console.log(getArrayOfMultipleFour);
