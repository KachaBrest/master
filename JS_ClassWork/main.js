const request = new XMLHttpRequest(); // создаем объект для получения JSON запроса
 
request.open('GET', 'https://jsonplaceholder.typicode.com/users'); // применяем метод .open('команда HTTP запроса', 'адресс откуда получаем')
 
request.onload = function() {   // функция .onload!!!! для обработки запроса
const result = request.response; // переменная которая получает строчный JSON .response (ее в дальнейшем нужно парсить)
 
const object = JSON.parse(result); // преобразуем JSON строку в объект !!!(JSON.parse(наша переменная со строкой))!!! и записываем в переменную.
    // TODO: type code here
console.log(object);


function summPhoneNumber (arr) { // функция для подсчета суммы из цифр телефонного номера
    console.log(arr);
    let arr1 = arr.split('');
    console.log(arr1);
    const reducer = (previousValue, currentValue) => {
        if (Number.isInteger(+currentValue)) {
            return previousValue += +currentValue;
        } else {
            return previousValue += 0;
        }
    };
    const summNumber = arr1.reduce(reducer, 0);
    console.log(summNumber);
}
const filter = object.map( i => {
    return {
            email: i.email.slice(i.email.indexOf('@')+1,i.email.length),
            phone: i.phone.replaceAll('.', '-').replaceAll('x', 'доб. '),
            summ: +i.address.geo.lat + +i.address.geo.lng,
            phoneSumm: summPhoneNumber(i.phone), // вызываем функцию для подсчета суммы из цифр телефонного номера
    }}).filter( i => (i.phone.includes('0')));
    console.log(filter);
}
 
request.send(); // объявляем функция, для выполнения HTTP запроса и получения JSON
console.log('Done'); 