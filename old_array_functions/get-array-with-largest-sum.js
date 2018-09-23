function getArrayWithLargestSum(a) {
    let maxSum = 0;
    let resultSum = 0;
    for (let i = 0; i < a.length; i++) {
        let currentSum = 0;
        for (let j = 0; j < a[i].length; j++) {
            currentSum += a[i][j];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
            resultSum = a[i];
        }
    }
    return resultSum;
}

const array1 = [1, 23, -23, 12];
const array2 = [23, 45, 0, -2];
const array3 = [10, 11, 12, 13, -13, -12, -11, -10, 0];
const mainArray = [array1, array2, array3];

const result = getArrayWithLargestSum(mainArray);
console.log(result);
