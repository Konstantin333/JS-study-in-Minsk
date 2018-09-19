//Функция на вход принимает массив из строк и возвращает самую длинную.

var array = ['qwert', 'asdf','ldkjmfgnrc','wdwdwd','aaaaaaabbbbbbbbcccccccc'];

function longOfString (a) { 
    var search = 0;
    for (var i = 0; i < a.length; i++) { 
        if (a[i].length > search) {
            search = a[i].length;
            var longestWord = a[i];
        }
    }      
    return longestWord;
} 
    
var result = longOfString(array); 
console.log(result);
