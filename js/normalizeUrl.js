/*
    JavaScript: else

    Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных.
    Она принимает адрес сайта и возвращает его с https:// в начале.

    Функция принимает адреса в виде АДРЕС или https://АДРЕС,
    но всегда возвращает адрес в виде https://АДРЕС

*/

const normalizeUrl = (url) => url.startsWith('https://') ? url : 'https://' + url;

/*
function normalizeUrl(url) {
    
    if (url.startsWith('https://')) {
        return url;
    } else {
        return 'https://' + url;
    }  

    return url.startsWith('https://') ? url : 'https://' + url;
}
*/