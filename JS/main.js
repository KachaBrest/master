// //задача 1

// let c = prompt ("введите число");
// let a = 3 + ((28*c)/(c**2 - 49) + ((c-7)/(c+7)))*(c/(c+7)) - (c/(c-7));
// console.log (a);

// let x = prompt ("введите число");
// let a = 4.5 + ((25*x**2 - 4**(-1))/(5*x + 2**(-1))) - 3*x;
// console.log (a);

// let a = prompt ("введите число");
// let x = ((2*a-2)/(a-2))+1-((8*a)/(a**2-4)+(a-2)/(a+2))*(a/(a+2));
// console.log (x);

// //задача 2

// let a = +prompt ("Введите 1 катет прямоугольного треугольника");
// let b = +prompt ("Введите 2 катет прямоугольного треугольника");
// let c = ((a**2)+(b**2))**(0.5);
// let p = a + b + c;
// let s = (a*b)/2;
// console.log ("гипотенуза", c);
// console.log ("периметр", p);
// console.log ("площадь", s);

// //задача 3

// let a = +prompt ("Введите 1 число");
// let b = +prompt ("Введите 2 число");
// let c = +prompt ("Введите 3 число");
// let d;
// if (a>b && a>c) {
//     d = a
// }
// else if (b>a && b>c) {
//     d = b
// }

// else if (c>a && c>b) {
//     d = c
// }
// else if ( a==b && a>c ) {
//     d = a + "(первое и второе число равны)"
// }
// else if (a==c && a>b) {
//     d = a + "(первое и третье число равны)"
// }
// else if (b==c && b>a) {
//     d = b + "(второе и третье число равны)"
// }
// else d = a + "(числа равны)"

// console.log (d);

// //задача 4

// let a = +prompt("Введите любое число")

// if (a%2 == 0) {
//     console.log ("да")
// }
// else console.log ("нет")

// Домашняя работа 12.01

// Задача 1
// for (let i = 1; i<21; i++) {
//     console.log(i)
// }

// for (let i = -1; i>-21; i--) {
//     console.log(i)
// }

// for (let i = 100; i>=0; i=i-4) {
//     console.log(i)
// }

// Задача 2 (Дано два числа. Если хотя бы одно из них больше 30, то вывести yes, иначе no.)

// let n = +prompt("Number1");
// let k = +prompt("Number2");

// if(n>30 || k >30) {
//     console.log("yes");
// }
// else {
//     console.log("no")
// }

// Задача 3 (Пользователь вводит три числа. Если все числа больше 10 и первые два числа делятся на 3, то вывести yes, иначе no)

// let n1 = +prompt("Number");
// let n2 = +prompt("Number");
// let n3 = +prompt("Number");
// if(n1>10 && n2>10 && n3>10 && n1%3==0 && n2%3==0) {
//     console.log("yes");
// }
// else {
//     console.log("no");
// }

// Задача 4 (Для данного n найти сумму 1+2+3+...+n. Например, для n=10 ответ равен 55.)

// let n = +prompt("Number");
// let s = 0;
// for(let i=1;i<=n;i++) {
//     s = s + i;
// }
// console.log(s);

// Задача 5 (Пользователь вводит количество месяцев, лет и получает количество дней за это время. Считать, что в месяце 30 дней.)

// let n1 = +prompt("Mouth");
// let n2 = +prompt("Years");
// let s = n1*30 + n2*365;
// alert(s);

// Задача 6 (Пользователь вводит число n, вывести в консоли треугольник с основанием длиной n)

// let n = +prompt("Number");
// let s = "A";
// for (let i=1; i<=n; i++) {
//     console.log(s);
//     s = s + "A";
// }

// Задача 7 (Выведите на экран квадрат из нулей и единиц, причем нули находятся только на диагонали квадрата. Всего в квадрате 100 x 100 цифр.)

// for (let i=0; i<100; i++) {
//     for (let j=0; j<100; j++) {
//         if( i==j || i+j==100-1) {
//             console.log("0");
//         }
//         else {
//             console.log("1");
//         }
//     }
// }    

// 23.01
// Удалите в строке все символы '!'
// let str = 'asd!asdf!adf!asdf!!!!';
// let str1 = str.replaceAll('!', '');
// console.log(str1);

// !!! Дана строка, состоящая из слов, разделенных пробелами.

// Определите количество слов в строке.
// В данной строке вставить после каждого символа 'a' символ 'b'.
// Удалите 3 первых слова

// let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
// let str1 = str.replaceAll(' ', '');
// let x = str.length - str1.length + 1;
// console.log(x);
// let str2 = str.replaceAll('a', 'ab');
// console.log(str2);
// let str3 = str.substring(str.indexOf(' ', str.indexOf(' ', str.indexOf(' ')+1)+1)+1, str.length);
// console.log(str3);

// Дан email в строке. Определить, является ли он корректным

// наличие символа '@' и точки
// наличие не менее двух символов после последней точки

// let email = 'admin@email.com';
// if (email.indexOf('@') > 0 && email.indexOf('.') > 0 && (email.length - (email.lastIndexOf('.') + '1')) >= 2) {
//     console.log('Адресс введен корректно')
// }
// else {
//     console.log('адресс введен некоррктно')
// }

// !!!Дана строка, содержащая полное имя файла (например, 'c:\WebServers\home\testsite\www\myfile.txt'). Выделите из этой строки имя файла без расширения.
// let str = 'c:\WebServers\home\testsite\www\myfile.txt';
// let str2 = str.substring(str.lastIndexOf('w')+1, str.lastIndexOf('.'));
// console.log(str.lastIndexOf('w'));
// console.log(str.lastIndexOf('.'));
// console.log(str2);

// Удалить в строке все цифры.

// let str = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud';
// for ( let i=0; i<10; i++) {
//     str = str.replaceAll(i, '');
// }
// console.log(str);

// Замените все символы '+' на '-' и наоборот

// let str = '+++++------==---+++++'
// let str1 = str.replaceAll('+', '-');
// let str2 = str.replaceAll('-', '+');
// console.log(str1);
// console.log(str2);

// Напишите функцию которая принимает r и возвращает длину окружности радиусом r

// let r = +prompt("Введите радиус");
// function rad() {
//     let p = 2*3.14*r;
//     console.log(p);
// }
// rad();

// Напишите функцию, которая принимает цену товара price и возврадает новую цену с скидкой 3.5 %

// let price = +prompt('Введи цену');
// function skidka() {
//     let x = price*(1 - 0.035);
//     console.log('Цена со скидкой' + ' : ' + x);
// }
// skidka();

// Найдите и выведите:

// сумму всех елементов
// максимальное число
// минимальное число
// среднее арифметическоe всех элементов
// сумму всех элементов на четных позициях

// let arr = [1.82,7.43,4.84,0.72,2.89,2.08,2.83,9.8,3.9,2.36,5.37,1.6,8.38,7.04,5.39,4.54,8.79,2.65,6.99,8.69,6.19,2.49,3.05,2.87,5.4,7.51,5.95,3.37,5.01,1.88,6.55,9.82,4.32,0.62,4.18,2.3,3.29,4.95,6.35,3.3,5.64,5.7,5.69,4.7,3.88,3.76,6.52,5.12,5.46,5.32,2.79,3.65,1.07,2.03,8.92,4.84,0.91,5.31,8.96,3.19,8.33,9.99,3.73,5.59,1.45,3.8,9.84,2.83,0.5,2.59,6.75,1.03,8.18,1.53,6.08,8.01,6.04,3.99,7.52,3.23,0.78,2.24,0.79,2.57,3.75,5.67,8.27,7.56,0.12,0.86,3.02,9.76,2.99,4.29,7.48,1.96,0.8,3.98,6.71,1.82,1.32,4.24,0.59,6.94,5.55,8.86,7.62,7.75,1.65,0.04,4.54,7.03,6,8.16,6.88,9.64,1.6,3.56,5.22,2.96,3.72,4.64,5.45,2.18,7.01,4.31,7.27,5.28,1.8,8.64,3.19,4.94,3.36,6.11,0.21,8.62,7.68,1.16,8.51,0.19,0.11,2.42,3.18,0.54,9.62,6.74,9.74,5.64,2.79,0.82,2.46,9.87,0.22,0.7,0.8,7.88,5.8,0.36,8.16,6.59,8.3,2.23,2.03,5.23,7.5,6.86,6.9,1.11,0.48,5.71,9.32,0.3,2.98,5,9.41,4.63,5.15,2.29,2.95,5.21,6.02,7,9.81,8.55,9.19,4.83,9.78,8.21,0.97,0.09,0.48,4.69,9.38,1.92,5.94,6.46,8.56,2.46,8.53,0.62,8.62,3,3.38,0.35,8.03,7.22,6.76,2.8,0.91,9.95,2.18,2.39,5.35,7.97,2.44,6.69,2.03,8.05,2.23,5.6,9.84,5.48,7.07,7.8,2.67,1.47,5.08,4.08,7.26,4.33,3.94,9.01,9.81,7.46,6.57,9.33,3.76,5.1,0.21,5.97,7.96,2.99,9.39,2.87,2.45,8.82,5.71,2.09,0.42,3.89,8.86,3.26,2.1,4.26,4.34,9.29,4.26,4.44,5.84,1.37,6.81,8.93,6.34,3.9,3.9,1.14,1.29,9.72,3.42,1.42,0.14,7.5,4.34,2.98,7.29,8.24,0.12,4.09,2.22,7.93,6.69,0.92,1.12,5.48,5.64,4.51,5.98,9.51,9.76,0.56,8.24,5.4,2.99,7.45,0.32,8.17,4.71,4.7,4.37,6.76,6.39,6.96,0.66,9.61,6.63,1.31,3.86,6.72,6.14,0.86,8.04,3.31,1.37,2.24,7.17,5.54,9.66,6.66,7.92,2.85,7.74,1.98,5.17,6.27,6.85,3.35,8.06,0.73,4.45,3.82,2.21,5.78,8.44,7.78,0.15,7.25,8.81,5.47,3.7,2.51,3.45,8.18,3.52,5.97,4.16,7.97,4.69,4.26,1.63,7.71,5.29,5.27,8.23,4.67,1.09,8.54,8.18,0.13,8.4,2.63,2.72,7.34,7.33,3.09,7.3,3.92,7.68,6.31,7.98,5.55,6.69,4.27,6.01,5.61,5.97,3.53,5.5,6.34,5.11,3.56,6.23,5.13,9.1,7.67,2.24,3.62,0.31,7.73,8.74,1.27,9.27,0.44,5.41,2.64,0.41,4.88,2.14,7.69,7.12,0.46,1.25,8.62,2.61,4.19,2.05,0.11,6.09,3.45,3.71,4.68,2.8,6.61,5.16,2.79,4.24,1.29,7.38,5.25,4.05,2.14,1.53,2.64,8.24,2.59,8.28,8.35,3.59,0.44,3.72,4.57,4.04,4.74,8.15,1.3,7.97,5.17,4.99,5.15,7.5,7.61,3.01,3.81,4.23,4.2,7.05,5.3,7.93,0.4,7.24,5.82,1.93,5.35,2.62,7.3,0.53,6.72,6.48,4.15,1.19,8.35,4.26,8.41,5.63,1.43,5.83,4.13,8.74,8.12,6.72,3.17,4.46,9.27,8.72,6.01,3.11,3.56,6.52,2.85,5.88,7.38,8.75,2.37,0.01,4.83,2.39,9.6,0.17,0.07,9.35,8.37,6.83,5.56,8.98,1.85,3.11,3.94,8.14,4.53,9.68,0.86,3.48,2.51,7.17,5.21,9.77,6.18,8.24,3.88,9.99,4.15,2.64,4.36,5.85,4.28,8.8,2.97,2.78,9.78,3.48,4.71,1.66,9.93,1.39,2.93,4.31,6.93,6.57,1.94,0.28,3.67,9.75,0.15,3.46,1.51,6.53,7.01,1.98,8.27,0.22,7.4,7.9,2.19,5.84,4.64,1.32,4.71,1.7,2.65,6.96,2.04,1.14,4.53,4.83,1.82,9.45,4.1,1.54,6.26,9.48,3.37,2.31,2.02,2.66,2.72,2.12,0.46,8.21,1.73,1.38,1.05,1.67,4.26,0.15,8.16,6.74,5.38,4.42,5.18,4.13,0.24,2.22,2.15,1.42,3.13,0.42,4.25,3.67,9.76,5.41,0.93,1.3,9.92,6.34,3.02,5.73,0.72,7.57,6.57,0.66,4.54,2.29,0.97,9.6,0.06,7.41,3.74,3.12,0.54,7.32,1.12,4.17,3.73,3.06,7.23,4.6,3.58,5.5,2.29,8.18,3.24,7.36,7.63,7.94,8.8,6.2,0.28,3.69,0.04,4.62,2.94,2.62,5.88,0.52,9.36,4.32,2.92,0.58,1.75,2.01,6.67,3.75,7.09,3.2,9.53,3.79,9.62,1.15,7.62,2.88,8.39,8.12,3.13,2.6,8.06,4.32,3.03,4.31,0.35,4.34,7.25,1.52,7.5,5.99,2.95,2.42,8.45,7.96,1.95,8.39,7.44,6.61,4.35,3.86,2.32,0.06,6.01,0.12,5.14,0.77,6.64,7.37,8.63,7.93,6.9,2.2,5.5,1.47,0.35,8.25,4.19,3.09,4.73,6.16,1.68,1.56,1.06,4.81,6.1,5.84,5.69,8.4,3.07,0.85,8.14,9.05,6.11,8.33,9.06,5.62,8.88,0.96,6.5,6.69,1.53,8.72,8.83,2.71,9.82,2.77,9.51,5.91,4.76,8.43,9.48,0.7,4.91,1.31,5.61,2.51,1.83,1.49,4.7,6.06,1.58,6.55,9.45,0.64,6.95,0.44,6.01,1.27,6.79,1.85,4.67,3.71,7.13,9.27,6.36,8.83,4.79,1.49,0.66,6.99,1.65,9.02,5.73,5.6,8.08,2.07,7.06,9.08,4.62,4.54,5.34,1.17,3.7,0.56,7.03,0.72,4.1,6.24,5.38,3.67,0.49,3.81,1.51,2.12,9.71,1.3,5.36,2.39,9.29,0.5,2.92,4.63,6.13,1.02,3.18,0.38,6.71,8.99,2.26,2.38,7.69,3.27,6.91,7.08,8.94,7.19,1.47,8.52,5.49,5.34,4.05,0.66,4.24,7.04,8.7,7.81,3.22,8.82,0.52,6.9,1.05,3.86,2.2,6.8,3.96,2.37,0.34,7.78,7.87,3.04,5.73,4.3,7.4,3.89,8.4,1.71,8.81,3.41,7.72,3.08,6.74,3.37,8.9,8.53,9.19,2.09,2.45,7.35,5.52,5.21,5.96,9.97,0.76,0.12,2.35,6.32,8.02,7.46,9.55,7.52,6.8,7.82,4.73,8.29,8.06,7.93,0.78,1.05,1.19,2.71,6.21,2.53,0.47,4.49,5.96,3.05,3.87,7.85,6.59,7.76,1.53,9.97,2.57,3.03,1.22,3.78,9.17,9.41,2.74,0.41,5.5,0.25,0.44,1.89,9.69,8.54,1.55,5.97,0.65,1.61,4.84,3.46,6.72,0.24,9.14,4.71,3.51,1.61,3.28,1.29,4.02,3.12,1.41,5.49,8.83,2.9,5.32,3.18,5.21,2.52,5.28,8.54,0.43,4.26,4.97,8.19,3.4,6.58,0.39,7.61,3.52,0.57,9.92,7.01,0.16,8.07,0.23,8.21,7.3,0.48,8.63,9.3,0.42,5.7,9.71,2.05,5.05,6.76,3.86,3.92,0.05,7.46,5.11,6.01,1.21,2.24,5.39,1.26,8.3,7.37,0.22,7.76,5.82,6.77,7.08,9.03,2.47,9.8,2.9,3.65,6.27,3.77,8.44,8.31,5.95,9.36,2.17,8.48,3.16,9.41,5.12,1.45,5.31,4.55,5.16,4.15,8.73,2.53,5.81,6.23,7.07,9.69,9.37,3.21,8.54,6.14,4.69,2.51,2.23,8.91,1.36,9.8,1.84,0.08,6.68,1.78,3.32];
// let s = 0;
// let s2 = 0;
// let arr1 = arr;
// let max = arr1.pop();
// let min = max;
// for( let i=0; i<arr.length; i++) {
//     if(max < arr1[i]){
//         max = arr1[i];
//     };
//     if (min > arr1[i]) {
//         min = arr[i];
//     }
//     if(i%2!=0) {
//         s2 +=+arr[i];
//     }
//     s +=+arr[i];
// };
// console.log(s);
// console.log(max);
// console.log(min);
// console.log(s/arr.length);
// console.log(s2);

// Дана случайная строка, преобразуйте строку

// удалите лишние пробелы’
// каждое слово с большой буквы
// замените все буквы 'e' на 'и'
// удалите последнюю букву каждого слова
// выведите все слова, которые начинаются на 'р'

// let s ="Срееднее арифметическое —    разновидность среднего значения. Определяется как число, равное 
//сумме всех чисел множества, делённой на их количество. Является одной из наиболее распространённых мер 
//центральной тенденции"
// s = s.replaceAll('  ', ' ');
// s = s.replaceAll('е', 'и');
// let arr = s.split(' ');
// let arr1 = 0;
// for(let i = 0; i<arr.length;i++){
//     arr1 = arr[0].toUpperCase + arr.slice(1);
//     arr1 += arr[i];
// };
// console.log(arr1);
// console.log(arr);
// console.log(s);

// Задача

// Найдите первый четный отрицательный элемент
// Получите новый массив с четными элементами
// Получите новый массив с элементами через 1 по порядку
// Вывидите все элементы массива в обратном порядке.
// Найти произведение элементов массива
// Найти количество положительных элементов массива
// Вычислить среднее арифметическое значение тех элементов массива, которые попадают в интервал от –2 до 10
// * Определите есть ли в массиве одинаковые элементы

// let arr = [5, 5, -58, -50, 68, -41, -22, -7, -64, 88, -51, 13, -13, -11, -50, -80, -13, 100, -70, -40, -98, 3, 20, -30, -30, -9, 46, 39, 89, 86, 38, 77, 64, -69, -37, 60, 73, 70, -33, 54, -29, 14, 15, 88, 65, -11, -10, 44, 15, 71, -88, 57, -26, 66, -87, 46, 46, 13, 65, -67, 56, 99, -97, -31, -98, -3, -74, 70, 45, -50, 78, 57, 100, 77, -85, -24, -89, -38, 26, -45, 55, -53, -43, -7, 90, -53, 17, -47, -93, 66, 33, 66, 78, 55, 34, -9, 63, -74, 87, 37];
// let k = arr.find( c => c <= 0 && c%2 == 0); //первый четный отрицательный элемент
// console.log(k);
// let arr1 = arr.filter( c => c%2 == 0); //новый массив с четными элементами
// console.log(arr1);
// let arr2 = arr.filter( (a, c) => c % 2 == 0); //новый массив с элементами через 1 по порядку
// console.log(arr2);
// console.log(arr.reverse()); //все элементы массива в обратном порядке.
// let comp = 1;
// arr.forEach( c => comp = comp*c); //произведение элементов массива
// console.log(comp);
// let numPol = arr.filter( c => c >= 0);
// console.log(numPol.length+1); //количество положительных элементов массива
// let filt = arr.filter( c => c >= -2 && c <= 10); //находим числа в диапазоте -2 -> 10 включительно 
// let sSum = 0; 
// filt.map( c => sSum+=c); 
// console.log(sSum/filt.length); //среднее арифметическое значение тех элементов массива, которые попадают в интервал от –2 до 10
// console.log(arr.some( c => c == arr.map( i => a[i] == a[i+1])));


// Описать объект, представляющий треугольник. Предусмотреть методы для создания объектов, вычисления площади и периметра

// function Triangle (sideFirst, sideSecond, sideThird){
//     this.sideFirst = sideFirst;
//     this.sideSecond = sideSecond;
//     this.sideThird = sideThird;
//     this.periment = function() {
//         return 0.5*(sideFirst + sideSecond + sideThird);
//     };
//     this.square = function(){
//         return ((0.5*(sideFirst + sideSecond + sideThird))/2*((0.5*(sideFirst + sideSecond + sideThird))/2-sideFirst)*((0.5*(sideFirst + sideSecond + sideThird))/2 - sideSecond)*((0.5*(sideFirst + sideSecond + sideThird))/2 - sideThird))**0.5
//     };
// };

// const tr1 = new Triangle (2,3,4);
// console.log(tr1); 
// console.log(tr1.periment());
// console.log(tr1.square());


// Создайте структуру с именем train, содержащую поля: название пункта назначения, номер поезда, время отправления.

// Ввести данные в массив из пяти элементов типа train
// Упорядочить элементы по номерам поездов.
// Добавить возможность вывода информации о поезде, номер которого введен пользователем.
// Добавить возможность сортировки массив по пункту назначения, 
// (* причем поезда с одинаковыми пунктами назначения должны быть упорядочены по времени отправления)

// function Train (punctName, number, time) {
//     this.punctName = punctName;
//     this.number = number;
//     this.time = time;
// };

// const train1 = new Train ('Brest', 1, 2100);
// const train2 = new Train ('Minsk', 5, 1100);
// const train3 = new Train ('Brest', 3, 1800);
// const train4 = new Train ('Vitebsr', 2, 0800);
// const train5 = new Train ('Grodno', 4, 1500);

// const allTrain = [train1,train2,train3,train4,train5];

// let sort = allTrain.sort( (n1, n2) => n1.number - n2.number); // сортировка по № поезда
// console.log(sort);

// let n = 5;
// let filter = allTrain.filter( i => i.number == n); // выводим поезд с определенным номером
// console.log(filter);

// let sortPunct = allTrain.sort( (p1, p2) => { // сортировка по пункту назначения
//     if (p1.punctName > p2.punctName) {
//         return 1;
//     } else if (p1.punctName < p2.punctName) {
//         return -1;
//     }
//     return 0});
// console.log(sortPunct);

// ============02.02.2022============

// =====Задача 1=====
//Объект Покупатель:
//    Фамилия, Имя, Отчество, Адрес, Номер кредитной карточки, Номер банковского счета;
//Создать массив из 5 покупателей.
//Вывести список покупателей в алфавитном порядке
//Вывести покупателей, у которых номер кредитной карточки находится в заданном диапазоне (1200 0000 0000 - 9900 0000 0000). 
//(между 2 числами, задаете вы сами или спрашиваете через prompt)

// function Client (lastName, ferstName, surname, adress, numberCreditCart, numberBank ) {
//     this.lastName = lastName;
//     this.ferstName = ferstName;
//     this.surname = surname;
//     this.adress = adress;
//     this.numberCreditCart = numberCreditCart;
//     this.numberBank = numberBank;
//     this.print = function(){
//         console.log(`${surname} ${lastName} ${ferstName}: 
//         City - ${adress}; 
//         Card number - ${numberCreditCart}; 
//         Bank number - ${numberBank}.
//         ==================================`);
//     }
// }

// let client1 = new Client( 'Aleksandr', 'Anatolievich', 'Guc', 'Brest', 123456781234, 'PY342853');
// let client2 = new Client( 'David', 'Ivanovich', 'Volk', 'Mogilev', 142345678123, 'PY2345673');
// let client3 = new Client( 'Alesia', 'Petrovna', 'Kacko', 'Brest', 098765432345, 'PY3987654');
// let client4 = new Client( 'Mihail', 'Sergeevich', 'Pushkin', 'Rovno', 111122223333, 'PY3129834');
// let client5 = new Client( 'Julia', 'Andreevna', 'Shpack', 'Nesvij', 989876765454, 'PY225534');
// const clients = [client1, client2, client3, client4, client5];
// let sort = clients.sort((n1, n2) => {
//     if (n1.surname > n2.surname) {
//         return 1;
//     }
//     else if (n1.surname < n2.surname) {
//         return -1;
//     }
//     return 0;
// });
// console.log(sort);

// let filter = clients.filter(i => i.numberCreditCart > 120000000000 && i.numberCreditCart < 990000000000);
// console.log(filter);


// =====Задача 2=====
//Аквариум
//Опишите объект fish
//    имя, цвет, хищник (да или нет), размер, скорость
//Опишите объект aquarium
//    массив рыбок
//    вывод списка рыбок Name: Имя, Color: Цвет, Size: размер, Speed: скорость, Predator: (да или нет) (соответсвенно)
//    добавление рыбок
//    смерть рыбки по имени
//    вывод всех рыбок чья скорость выше определенной
//    вывод только хищных рыб
//    сортировка рыбок по имени
//    сортировка рыбок по размеру

// function Fish (name, color, size, speed, predator) {
//     this.name = name;
//     this.color = color;
//     this.size = size;
//     this.speed = speed;
//     this.predator = predator;
//     this.print = function() {
//         console.log(`Fish name - ${name}, color - ${color}, size - ${size}, speed - ${speed}km/h, predator - ${predator}`);
//     };
// };

// function Aquarium(fishs = []){
//     this.fishs = fishs;
//     this.add = function(fish){
//         this.fishs.push(fish);
//     };
//     this.show = function (){
//         this.fishs.forEach(b=> b.print())
//         console.log('--------');
//     };
//     this.sheDied = function(name) {
//         this.fishs = this.fishs.filter( n => n.name == name)
//         console.log('sheDied')
//     };
//     this.liveFish = function(name) {  // ????????????????
//         this.fishs = this.fishs.splice(this.fishs.indexOf(sheDied(name)),1);
//     }
//     this.speedLimit = function (limit){
//         this.fishs = this.fishs.filter( i => i.speed > +limit);
//     };
//     this.onlyPredator = function (){
//         this.fishs = this.fishs.filter( i => i.predator == 'yes');
//     };
//     this.nameFish = function() {
//         this.fishs.sort((n1, n2) => {if (n1.name > n2.name) {
//             return 1;
//         } else if (n1.name < n2.name) {
//             return -1;
//         } return 0;})
//     };
//     this.fishSize = function (){
//         this.fishs.sort( (s1, s2) => {if (s1.size > s2.size) {
//             return 1;
//         } else if (s1.size < s2.size) {
//             return -1;
//         } return 0;});
//     }
// };

// let fish1 = new Fish('Perch', 'gray', 'midle',12, 'yes');
// let fish2 = new Fish('Amphiprion', 'orange', 'small',13, 'no');
// let fish3 = new Fish('Guppy', 'multi-color', 'small',9, 'no');
// let fish4 = new Fish('Shark', 'dark gray', 'big',25, 'yes');
// let fish5 = new Fish('Piranhas', 'gray-blue', 'small',19, 'yes');
// let fish6 = new Fish('Piranhas', 'gray-blue', 'small',19, 'yes');
// let fish7 = new Fish('Piranhas', 'gray-blue', 'small',19, 'yes');

// const fishs = [fish1, fish2, fish3, fish4, fish5];
// const aquarium = new Aquarium(fishs);

// aquarium.liveFish('Shark');
// aquarium.show();

// ==============================05.02.2022==========================
// Получите по адресу https://jsonplaceholder.typicode.com/users массив объектов
// Преобразуйте их в массив объектов вида 
// Полученный массив преобразуйте заменив phone на сумму ТОЛЬКО четных цифр из этого же свойства
// Отсортируйте массив по name
// Удалите из массив всех в номере дома которых есть цифра 1
// Разделите индекс всех на 2 и округлите результат до целого вверх
// Выведите результат

// const request = new XMLHttpRequest(); // создаем объект для получения JSON запроса
 
// request.open('GET', 'https://jsonplaceholder.typicode.com/users'); // применяем метод .open('команда HTTP запроса', 'адресс откуда получаем')
 
// request.onload = function() {   // функция .onload!!!! для обработки запроса
// const result = request.response; // переменная которая получает строчный JSON .response (ее в дальнейшем нужно парсить)
 
// const object = JSON.parse(result); // преобразуем JSON строку в объект !!!(JSON.parse(наша переменная со строкой))!!! и записываем в переменную.
 
// console.log(object);

// const arr = object.map( i => {
//     return {
//         id: i.id,
//         name: i.name.slice(0,i.name.indexOf(' ')).toLocaleUpperCase(),
//         phone: i.phone.replace(/\D/g,''),
//         location: {street: i.address.street,
//                     index: i.address.zipcode,
//                     number: i.address.suite.replace(/\D/g,''),
//         },
//     }
// });

// const arr1 = arr.filter( i => i.location.number.indexOf('1') < 0);
// arr1.sort( (n1,n2) => {
//     if (n1.name > n2.name) {
//         return 1;
//     } else if (n1.name < n2.name) {
//         return -1
//     } return 0
// });
// arr1.map( i => {return i.location.index = Math.round(i.location.index/2)}); // ??????????????
// console.log(arr);
// console.log(arr1);

// }
// request.send(); // объявляем функция, для выполнения HTTP запроса и получения JSON
// console.log('Done');

// ------Задача------
// Получите по адресу https://jsonplaceholder.typicode.com/posts массив объектов
// Удалите из массив все элементы title который больше 25 символов
// Каждуй первую букву слова из свойства body сделайте заглавной
// Отсортируйте массив по длине body
// Удалите из всех элементов свойство userId
// Выведите результат
// Преобразуйте результат в JSON строку и вывидите

// const request = new XMLHttpRequest(); // создаем объект для получения JSON запроса
 
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // применяем метод .open('команда HTTP запроса', 'адресс откуда получаем')
 
// request.onload = function() {   // функция .onload!!!! для обработки запроса
// const result = request.response; // переменная которая получает строчный JSON .response (ее в дальнейшем нужно парсить)
 
// const object = JSON.parse(result); // преобразуем JSON строку в объект !!!(JSON.parse(наша переменная со строкой))!!! и записываем в переменную.
 
// console.log(object);

// const arr = object.map( i => {
//     return {
//         id: i.id,
//         title: i.title,
//         body: i.body.replace(/( |^)[а-яёa-z]/g, function(x){ return x.toUpperCase();}), //каждое слово с большой буквы
//     }
// });

// const arr1 = arr.filter( i => i.title.length > 26);
// arr1.sort( (l1, l2) => {
//     if (l1.body.length > l2.body.length) {
//         return 1;
//     } else if (l1.body.length < l2.body.length) {
//         return -1;
//     } return 0;
// }); 
// console.log(JSON.stringify(arr1));
// // console.log(arr1);
// }
// request.send(); // объявляем функция, для выполнения HTTP запроса и получения JSON
// console.log('Done');

// =======================09.02.2022============================
// ! Отсортируйте все альбомы по заголовку
// ! Найдите количество картинок ширина и высота которых больше 800px
// Преобразуйте альбом
    // !Добавьте свойство user куда поместите объект соответствующего автора (id автора == id пользователя)
    // Замените в массиве images (внутри альбома) цифры на картинки (объекты image) с соответсвующим id
// ! Удалите альбомы в которых меньше 5 картинок


// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его
xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json'); 

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function() {
    console.log('Onload');
    const result = xhr.response; //  Получаем ответ, это JSON строка
    const object = JSON.parse(result); // Преобразуем строку в JS объект
    // Пишем код домашки ТУТ!!!
    object.albums.sort( (n1, n2) => {
        if (n1.title > n2.title) {
            return 1;
        } else if (n1.title < n2.title ) {
            return -1;
        } return 0;
    });
    let n = object.images.filter(i => i.height.replace(/\D/g,'') < 800).filter(i => i.width.replace(/\D/g,'') < 800).length;
    console.log('картинок с шириной и высотой меньше 800 px - ' + n +'шт');
    object.albums.forEach( i => {i.user = object.users.filter( n => (n.id === i.authorId))});
    object.albums.forEach( (i, index) => {
        let ind = i.images;
        
        ind.forEach( massive => massive.forEach((index, num) => {
            return index = object.images[massive].image}));
        console.log(ind);
    });
    let filt = object.albums.filter( i => i.images.length > 4);
    console.log(object);
    console.log(filt);  // Выводим результат по необходимости

};

// Этот код сработает если мы не получим ответ от сервера
xhr.onerror = function() {
  console.error("Запрос не удался");
};
