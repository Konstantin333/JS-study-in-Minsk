//Функция принимает массив строк.

//а). Найти наибольший общий их префикс;

const array = ['AB12qwertCD34', 'AB12zzxczxzczczcCD34', 'AB12123456767899067676456CD34', 'AB12zxc123vbn565sdcsdcCD34']

function showPrefix(a) {
    let maxWordLength = 0,
    prefix = 0;
    for (let i = 0; i < a.length; i++) { 
        if (a[i].length > maxWordLength) {
            maxWordLength = a[i].length;
        }
    } 
    let b = a[0],
    c = a[1];
        for (let h = 1; h <= maxWordLength; h++) {
            for (let k = 2; k < a.length; k++) {
                if (b.substring(0,h) === c.substring(0,h)) {
                    b = c;
                    c = a[k];
                    prefix = c.substring(0,h);
                } 
            }
        } 
    return prefix;
    }

let resultPrefix = showPrefix(array);
console.log(resultPrefix);

//б). Найти наибольший общий их постфикс.

function showPostfix(a) {
    let maxWordLength = 0,
    postfix = 0;
    for (let i = 0; i < a.length; i++) { 
        if (a[i].length > maxWordLength) {
            maxWordLength = a[i].length;
        }
    } 
    let b = a[0].split('').reverse().join(''),
    c = a[1].split('').reverse().join('');
        for (let h = 1; h <= maxWordLength; h++) {
            for (let k = 2; k < a.length; k++) {
                if (b.substring(0,h) === c.substring(0,h)) {
                    b = c;
                    c = a[k].split('').reverse().join('');
                    postfix = c.substring(0,h);
                } 
            }
        } 
    return postfix.split('').reverse().join('');
    }

let resultPostfix = showPostfix(array);
console.log(resultPostfix);
