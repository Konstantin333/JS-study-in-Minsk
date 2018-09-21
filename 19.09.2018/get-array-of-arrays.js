function getArrayOfLargestNumbers (a) {
    const newArray = [];
    for (let i = 0; i < a.length; i++) {
        let searchLargestNumber = 0;
        for (let j = 0; j < a[i].length;j++) {
            if (a[i][j] > searchLargestNumber) {
                searchLargestNumber = a[i][j];
            }
        }
        newArray.push(searchLargestNumber);
    }
    return newArray;
}

const array1 = [1, 2, 4, -25],
array2 = [34, -23, 132, 23],
array3 = [-122, -12, 0, -89],
mainArray = [array1, array2, array3];

let result = getArrayOfLargestNumbers(mainArray);
console.log(result);
