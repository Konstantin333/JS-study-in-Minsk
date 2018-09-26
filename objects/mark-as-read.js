//a). - изменить свойство isRead на true. При этои не изменять исходный объект, а вернуть новый.

function markAsRead(a){
    a.isRead = true;
    return a;
}

const object = {color: 'red', isRead: false};

const result = markAsRead(object);
console.log(result);

//б). - изменить свойство isRead на true. При этои не изменять ни исходный массив, ни исходные объекты.

function markAllAsRead(a){
    a.forEach(function(e){
        e.isRead = true;
    })
    return a;
}

const array = [{color: 'red', isRead: false}, {size: 'big', isRead: false}, {old: 12, isRead: false}];

const result2 = markAllAsRead(array);
console.log(result2);
