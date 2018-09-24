const array = [];
for (let i = 1; i <= 100; i++) {
    array.push(i)
}
const newArray = [];

const getArrayOfMultipleFour = array.forEach(function(e) {
    if (e % 4 === 0) {
        newArray.push(e);
    }
})

console.log(newArray);
