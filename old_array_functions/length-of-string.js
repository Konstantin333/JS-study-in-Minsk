//Функция на вход принимает массив из строк и возвращает самую длинную.

function lengthOfString (a) { 
    let search = 0;
    let longestWord = 0;
    for (let i = 0; i < a.length; i++) { 
        if (a[i].length > search) {
            search = a[i].length;
            longestWord = a[i];
        }
    }      
    return longestWord;
} 

const array = ['qwert', 'asdf','ldkjmfgnrc','wdwdwd','aaaaaaabbbbbbbbcccccccc'];
    
const result = lengthOfString(array); 
console.log(result);
