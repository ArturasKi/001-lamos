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

export function remove({id}) {
    let data = localStorage.getItem(key);
    if (null === data) {
        data = JSON.stringify([]); // jei nera ka nuskaityt atiduoda tuscia masyva (duomenis)
    }
    data = JSON.parse(data);
    data = data.filter(obj => obj.id !== id); // istrina
    data = JSON.stringify(data); // paverciam i stringa kad galetume prirasyt
    localStorage.setItem(key, data); // i local storage
}

// redaguojama su map, map padarys kopijas visu, redaguojamas bus pakeistas;
export function edit(obj) {
    let data = localStorage.getItem(key);
    if (null === data) {
        data = JSON.stringify([]);
    }
    data = JSON.parse(data);
    data = data.map(oldObject => oldObject.id !== obj.id ? oldObject : obj);
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
}