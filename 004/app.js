'use strict';

const n = ['Petras', 'asilas', 'barsukas', 'kate'];

console.table(n);

console.log(n[1]);

n[1] = 'Kazys'; // ideda i atitinkama auksta

// n[8] = 'Suo Sarikas';

// n.pop(); // ismeta paskutini;

// n.shift(); // ismeta pirmutini 0;

n.push('Suo Sarikas'); // ideda sekanciame aukste;

n.unshift('Pele'); // visada 0, iterpia i 0 ir nustumia kitus i prieki;

// n.splice(2, 1); // ismeta nuo 2 auksto, 1 karta. Jei (2, 2) ismes pradedant nuo 2 auksto 2 aukstus.

console.table(n);

console.log(n.length);

for (let i = 0; i < n.length; i++) {
    console.log(n[i]); // i = 0, 1, 2...
}

const nPlus = [
    [4, 7, 12],
    [85, 17, 12],
    [10, 33, 74],
    [26, 41, 99],
];

console.table(nPlus);

// console.log(nPlus[1][0]); // pirmas stulpelis, antras eilute
// console.log(nPlus[3][2]);

console.log("FOR'AS FOR'E PVZ");

for (let i = 0; i < nPlus.length; i++) {

    for (let k = 0; k < nPlus[i].length; k++) {

        console.log(nPlus[i][k]);

    }
}

console.log('FOR EACH PVZ');

nPlus.forEach(m => {
    m.forEach(k => console.log(k));
});

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const naujasNamas = [];

for (let i = 0; i < 10; i++) {
    const aukstas = [];
    for (let j = 0; j < 10; j++) {
        aukstas.push(rand(10, 99));
    }
    naujasNamas.push(aukstas);
}

console.table(naujasNamas);

// for (let i = 0; i < 10; i++) {
//     naujasNamas.push(rand(10, 99));
// }


