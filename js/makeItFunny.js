/*
    Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию,
    у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
    Для определения каждого n-ного элемента понадобится остаток от деления %.
    Подумайте, как его можно использовать.

    const text = 'I never look back';
    makeItFunny(text, 3); // 'I NevEr LooK bAck'
*/

const makeItFunny = (str, n) => {
    const re = new RegExp(`(${'.'.repeat(n - 1)})(.)`, 'g');
    return str.replace(re, (a, b, c) => b + c.toUpperCase());
}