/*
    JavaScript: Агрегация данных (Числа)

    Реализуйте функцию multiplyNumbersFromRange(),
    которая перемножает числа в указанном диапазоне включая границы диапазона. 
    
    Пример вызова:

    multiplyNumbersFromRange(1, 5); // 1 * 2 * 3 * 4 * 5 = 120
    multiplyNumbersFromRange(2, 3); // 2 * 3 = 6
    multiplyNumbersFromRange(6, 6); // 6
*/

const multiplyNumbersFromRange = (startNum, endNum) => {
    let multi = startNum;
    for (let i = startNum + 1; i <= endNum; multi *= i++){}
    return multi;
}