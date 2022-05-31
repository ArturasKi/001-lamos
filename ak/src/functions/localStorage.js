import getId from './getId';

const key = 'exams'; // žymi localstorage key 

export function create(obj) { // jei export be default prie import eina su {};
    let data = localStorage.getItem(key);
    if (null === data) {
        data = JSON.stringify([]);
    }
    data = JSON.parse(data);
    obj.id = getId(key + '_id'); // nurodomas key, nes funkcijoje buvo užduotas
    data.push(obj);
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
}

export function read() {
    let data = localStorage.getItem(key);
    if (null === data) {
        data = JSON.stringify([]); // jei nera ka nuskaityt atiduoda tuscia masyva (duomenis)
    }
    data = JSON.parse(data);
    return data;
}