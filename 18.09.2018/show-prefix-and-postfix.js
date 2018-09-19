//Функция принимает массив строк.

//а). Найти наибольший общий их префикс;

var array = ['AB12qwertCD34', 'AB12zzxczxzczczcCD34', 'AB12123456767899067676456CD34', 'AB12zxc123vbn565sdcsdcCD34']

function showPrefix(a) {
    var maxWordLength = 0;
    for (var i = 0; i < a.length; i++) { 
        if (a[i].length > maxWordLength) {
            maxWordLength = a[i].length;
        }
    } 
    var b = a[0];
    var c = a[1];
        for (var h = 1; h <= maxWordLength; h++) {
            for (var k = 2; k < a.length; k++) {
                if (b.substring(0,h) === c.substring(0,h)) {
                    b = c;
                    c = a[k];
                    var d = c.substring(0,h);
                } 
            }
        } 
    return d;
    }

var resultPrefix = showPrefix(array);
console.log(resultPrefix);

//б). Найти наибольший общий их постфикс.

function showPostfix(a) {
    var maxWordLength = 0;
    for (var i = 0; i < a.length; i++) { 
        if (a[i].length > maxWordLength) {
            maxWordLength = a[i].length;
        }
    } 
    var b = a[0].split('').reverse().join('');
    var c = a[1].split('').reverse().join('');
        for (var h = 1; h <= maxWordLength; h++) {
            for (var k = 2; k < a.length; k++) {
                if (b.substring(0,h) === c.substring(0,h)) {
                    b = c;
                    c = a[k].split('').reverse().join('');
                    var d = c.substring(0,h);
                } 
            }
        } 
    return d.split('').reverse().join('');
    }

var resultPostfix = showPostfix(array);
console.log(resultPostfix);
