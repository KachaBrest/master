// ===========================08.02.2022(JSON объекты)========================

// const request = new XMLHttpRequest(); // создаем объект для получения JSON запроса
 
// request.open('GET', 'https://jsonplaceholder.typicode.com/users'); // применяем метод .open('команда HTTP запроса', 'адресс откуда получаем')
 
// request.onload = function() {   // функция .onload!!!! для обработки запроса
// const result = request.response; // переменная которая получает строчный JSON .response (ее в дальнейшем нужно парсить)
 
// const object = JSON.parse(result); // преобразуем JSON строку в объект !!!(JSON.parse(наша переменная со строкой))!!! и записываем в переменную.
//     // TODO: type code here
// console.log(object);


// function summPhoneNumber (arr) { // функция для подсчета суммы из цифр телефонного номера
//     console.log(arr);
//     let arr1 = arr.split('');
//     console.log(arr1);
//     const reducer = (previousValue, currentValue) => {
//         if (Number.isInteger(+currentValue)) {
//             return previousValue += +currentValue;
//         } else {
//             return previousValue += 0;
//         }
//     };
//     const summNumber = arr1.reduce(reducer, 0);
//     console.log(summNumber);
// }
// const filter = object.map( i => {
//     return {
//             email: i.email.slice(i.email.indexOf('@')+1,i.email.length),
//             phone: i.phone.replaceAll('.', '-').replaceAll('x', 'доб. '),
//             summ: +i.address.geo.lat + +i.address.geo.lng,
//             phoneSumm: summPhoneNumber(i.phone), // вызываем функцию для подсчета суммы из цифр телефонного номера
//     }}).filter( i => (i.phone.includes('0')));
//     console.log(filter);
// }
 
// request.send(); // объявляем функция, для выполнения HTTP запроса и получения JSON
// console.log('Done'); 

//====================================

// const request = new XMLHttpRequest(); // создаем объект для получения JSON запроса
 
// request.open('GET', 'http://192.168.0.200:3000/1'); // применяем метод .open('команда HTTP запроса', 'адресс откуда получаем')
 
// request.onload = function() {   // функция .onload!!!! для обработки запроса
// const result = request.response; // переменная которая получает строчный JSON .response (ее в дальнейшем нужно парсить)
 
// const object = JSON.parse(result); // преобразуем JSON строку в объект !!!(JSON.parse(наша переменная со строкой))!!! и записываем в переменную.
//     // TODO: type code here
// object.users.forEach( i => {
//     i.posts = object.posts.filter( p => p.userId === i.id)
// });
// object.posts.forEach( i =>{
//     i.user = object.users.find( p => p.id === i.userId).name;
// })
// console.log(object);
// };
// request.send(); // объявляем функция, для выполнения HTTP запроса и получения JSON
// console.log('Done');

// =====================10.02.2022 (Даты)=============================

// const myYear = new Date (1990,09,25);
// const thisDay = new Date ();
// console.log(thisDay);
// const howSeck = +thisDay - +myYear;
// const howMyAge = new Date((howSeck/1000 + 1_000_000_000)*1000);
// console.log(howMyAge);
// console.log(myYear)
// let yaers = howMyAge.getFullYear() - myYear.getFullYear();
// console.log('От моего дня рождения, до сегодняжнего дня прошло ' + howSeck/1000);
// console.log('через 1 млрд секунд мне будет ' + yaers);