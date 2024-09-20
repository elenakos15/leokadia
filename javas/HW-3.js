 alert ('1. Проверка пароля');
let password = 'пароль';
let userInput = prompt('Введите пароль');
if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

alert ('2. Проверка числа c'); 
alert ('я ввела 5, хочу проверить : 5<10');
let c = 5; // например, любое число в диапазоне от 1 до 9
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

alert ('3. Проверка переменных d и e'); 
alert(' ввела в=150, е=50');
let d = 150; // любое число для примера
let e = 50;  // любое число для примера
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

alert('4. Преобразование типов');
alert('вводила как текстовые 2 и 3');
let a = '2';
let b = '3';
alert(Number(a) + Number(b)); // Преобразуем строки в числа

alert('5. Определение сезона'); 
alert('проверим 12');
let monthNumber = 12; // Пример месяца, можно изменить для тестирования
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default:
        alert('Неверный номер месяца');
}