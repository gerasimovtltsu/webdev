/*
    JavaScript: Возврат из циклов

    Реализуйте функцию hasChar(), которая проверяет (с учётом регистра),
    содержит ли строка указанную букву. 
    
    Функция принимает два параметра:

    1. Строка
    2. Буква для поиска

    hasChar('Hexlet', 'H'); // true
    hasChar('Hexlet', 'h'); // false
    hasChar('Awesomeness', 'm'); // true
    hasChar('Awesomeness', 'd'); // false
*/

const hasChar = (word, letter) => {
    if (word.includes(letter)) {
        return true;
    } else {
        return false;
    }
}