/*
    Реализуйте функцию getHiddenCard(), который принимает на вход номер кредитки (состоящий из 16 цифр)
    в виде строки и возвращает его скрытую версию, которая может использоваться на сайте для отображения.
    Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. 
    Другими словами, функция заменяет первые 12 символов, на звездочки. 
    Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.
*/

const getHiddenCard = (creditNum, hideNum) => {
    // creditNum - номер кредитки
    // hideNum - количество звездочек
    let cutNum = creditNum.substring(creditNum.length - 4); // cutNum - последние 4 цифры номера карты
    let starStr; // starStr - строка со звездочками
    if (hideNum) {
        starStr = '*'.repeat(hideNum)
    } else {
        starStr = '*'.repeat(4);
    }
    return starStr + cutNum;
}

/*
    Более интересное решение

    const getHiddenCard = (cardNumber, starsCount = 4) => {
        const visibleDigitsLine = cardNumber.slice(12);
        return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
    };
*/