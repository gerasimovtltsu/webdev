/*
    Реализуйте функцию capitalize(),
    которая принимает непустую строку и приводит первую букву первого слова к верхнему регистру:

    const name = 'arya';
    console.log(capitalize(name)); // => "Arya"
*/

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);