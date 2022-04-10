/*
    JavaScript: Агрегация данных (Строки)

    Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:
    joinNumbersFromRange(1, 1); // '1'
    joinNumbersFromRange(2, 3); // '23'
    joinNumbersFromRange(5, 10); // '5678910'
*/

const joinNumbersFromRange = (startNum, endNum) => {
    let result = '';
    while (startNum <= endNum) {
        result += `${startNum}`;
        startNum++;
    }
    return result;
}