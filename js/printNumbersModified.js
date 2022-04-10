/*
    JavaScript: Цикл While

    Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке.
    Для этого нужно идти от верхней границы к нижней.
    То есть счётчик должен быть инициализирован максимальным значением,
    а в теле цикла его нужно уменьшать до нижней границы.
*/

const printNumbers = (initialNumber) => {
    let i = 1;
    while (initialNumber >= i) {
        console.log(initialNumber);
        initialNumber--;
    }
    console.log('finished!');
}