/*
    JavaScript: Результат логических выражений

    Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ
    (по порядковому номеру, а не индексу) и возвращает его наружу.
    Если такого символа нет, то функция возвращает пустую строку.

    const name = 'Hexlet';

    // Обычное обращение возвращает undefined
    name[10]; // undefined

    // 11 символ соответствует 10 индексу
    getLetter(name, 11); // ''

    getLetter(name, 1); // 'H'
    getLetter(name, 0); // ''
    getLetter(name, 6); // 't'
*/

function getLetter(str, num) {
    return num < 1 || num > str.length ? '' : str[num - 1];
}

// const getLetter = (text, position) => text[position - 1] || ''; - короткое решение