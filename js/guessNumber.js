/*
    JavaScript: Условная конструкция (if)

    Реализуйте функцию guessNumber(), которая принимает число и проверяет,
    равно ли число заданному (пусть это будет 42).
    Если равно, то функция должна вернуть строку 'You win!',
    в противном случае нужно вернуть строку 'Try again!'.
*/

const guessNumber = (num) => num == 42 ? 'You win!' : 'Try again!';

/*
    const guessNumber = (num) => {
        if (num === 42) {
            return 'You win!';
        }

        return 'Try again!';
    };
*/