const array = [];
for (let i = 1; i <= 10; i++) {
    array.push(String(i));
}

const stringsToNumbers = array.map(function(e){
    return Number(e);
});

console.log(array);
console.log(stringsToNumbers);
