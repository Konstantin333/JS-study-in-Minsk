/*Функция принимает число n и:
а). выводит n-ый член последовательности 0, 1, 1, 2, 3, 5, 8, 13, ..., n => n, где
(первые два числа последовательности - 1 и 1, каждое следующее - сумма двух предыдущих)
б). выводит массив с со всей последовательностью до n.*/

function getSequenceMember(n) {
    var a = 0, 
    b = 1;
    for (i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    if (n === 1) {
        return a;
    }
    return b;
}

var resultA = getSequenceMember(9); 
console.log(resultA);

function getArrayOfSequences(n) {
    var array = [];
    var a = 0,
    b = 1;
    if (n === 1) {
        array.push(a);
        return array;
    } else {
        array.push(a, b);   
    }
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
        array.push(b);
    }
    return array;
  }

var resultB = getArrayOfSequences(9); 
console.log(resultB);
