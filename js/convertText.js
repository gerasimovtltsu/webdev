/*
    JavaScript: Тернарный оператор
    
    Реализуйте функцию convertText(), которая принимает на вход строку и,
    если первая буква не заглавная, возвращает перевернутый вариант исходной строки.
    Если первая буква заглавная, то строка возвращается без изменений.
    Если на вход передана пустая строка, функция должна вернуть пустую строку.


function convertText(str) {
    if (str == '') {
        return '';
    } else if (str[0] == str[0].toLowerCase()) {
        return str.split('').reverse().join('');
    } else {
        return str;
    }
}
*/

const convertText = (str) => {
    return (str[0] == str.toLowerCase()[0]) ? str.split('').reverse().join('') : str;
}