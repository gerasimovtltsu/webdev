/*
    JavaScript: Конструкция else if

    На электронной карте Вестероса, которую реализовал Сэм, союзники Старков отображены зеленым кружком,
    враги — красным, а нейтральные семьи — серым.

    Напишите для Сэма функцию whoIsThisHouseToStarks(),
    которая принимает на вход фамилию семьи и возвращает одно из трёх значений: 
    'friend', 'enemy', 'neutral'.

    Правила определения:

    Друзья ('friend'): 'Karstark', 'Tally'
    Враги ('enemy'): 'Lannister', 'Frey'
    Любые другие семьи считаются нейтральными
    Примеры вызова:

    whoIsThisHouseToStarks('Karstark'); // 'friend'
    whoIsThisHouseToStarks('Frey');     // 'enemy'
    whoIsThisHouseToStarks('Joar');     // 'neutral'
    whoIsThisHouseToStarks('Ivanov');   // 'neutral'
*/

function whoIsThisHouseToStarks(surname) {
    let friend = ['Karstark', 'Tally']; // Список дружественных фамилий
    let enemy = ['Lannister', 'Frey']; // Список фамилий врагов

    if (friend.includes(surname)) {
        return 'friend';
    } else if (enemy.includes(surname)) {
        return 'enemy';
    } else {
        return 'neutral';
    }
}