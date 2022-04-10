/*
    JavaScript: Обход строк

    Реализуйте функцию printReversedWordBySymbol(),
    которая печатает переданное слово посимвольно, но делает это в обратном порядке.

    const word = 'Hexlet';

    printReversedWordBySymbol(word);
    // => 't'
    // => 'e'
    // => 'l'
    // => 'x'
    // => 'e'
    // => 'H'
*/

const printReversedWordBySymbol = (word) => {
    let i = 0;
    word = word.split('').reverse().join("");
    while (i < word.length) {
        console.log(word[i]);
        i++;
    }
}