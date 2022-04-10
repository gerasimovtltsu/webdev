/*
    JavaScript: Отрицание

    Реализуйте функцию isPalindrome(), которая определяет, является ли слово палиндромом или нет.
    Реализуйте функцию isNotPalindrome(), которая проверяет что слово НЕ является палиндромом.
    Для этого, вызовите функцию isPalindrome() внутри isNotPalindrome() и примените отрицание.
*/

const isPalindrome = (str) => str == str.toLowerCase().split('').reverse().join('');
const isNotPalindrome = (str) => !isPalindrome(str.toLowerCase());