let arr = [1, 2, 3];

// Преобразование объекта в массив

const object1 = {...arr}; // Способ 1
const object2 = Object.assign({}, arr); // Способ 2

// Способ 3
const object3 = arr.reduce((res, key, index) => {
    res[index] = key;
    return res;
}, {});



console.log(object3);