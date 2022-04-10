/*
    JavaScript: Условия внутри тела цикла
*/

const countChars = (str, char) => {
    let i = 0;
    let count = 0;
    while (i < str.length) {
      if (str[i].toLowerCase() === char.toLowerCase()) {
        // Считаем только подходящие символы
        count = count + 1;
      }
      // Счетчик увеличивается в любом случае
      i = i + 1;
    }
  
    return count;
};