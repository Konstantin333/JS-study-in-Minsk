/*Функция принимает число n и:
а). выводит n-ый член последовательности 0, 1, 1, 2, 3, 5, 8, 13, ..., n => n, где
(первые два числа последовательности - 1 и 1, каждое следующее - сумма двух предыдущих)
б). выводит массив с со всей последовательностью до n.*/

function getSequenceMember(n) {
    let a = 0, 
    b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    if (n === 1) {
        return a;
    }
    return b;
}

let resultA = getSequenceMember(9); 
console.log(resultA);

function getArrayOfSequences(n) {
    const array = [];
    let a = 0,
    b = 1;
    if (n === 1) {
        array.push(a);
        return array;
    } else {
        array.push(a, b);   
    }
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        array.push(b);
    }
    return array;
  }

let resultB = getArrayOfSequences(9); 
console.log(resultB);
