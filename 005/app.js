const n1 = ['Petras', 'Asilas', 'Barsukas', 'Kate'];
const n2 = ['Antanas', 'Asilas', 'Barsukas', 'Simona'];


// map - padaro masyvo kopija su tuo paciu originalo reiksmiu kiekiu;
// foreach - 

const copy = n1.map(v => v + ' Valio'); // v - reiksme;
const copy1 = n1.filter(v => false);
const index = n1.indexOf('Asilas');

const copy2 = n1.filter(v => -1 !== n2.indexOf(v));


console.table(copy);
console.table(copy1);
console.table(index);
console.table(copy2);

const copy3 = [];

for (let i = 0; i < n1.length; i++) {
    const what = n1[i];
    for (let k = 0; k < n2.length; k++) {
        if (n2[i] === what) {
            copy3.push(what);
            break;
        }
    }
}

console.table(copy3);

for (const ja in n1) { // paima indeksus
    console.table(ja);
}

for (const jaa of n1) { // paima reiksmes
    console.table(jaa);
}


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ma = [rand(5, 25), rand(5, 25)];

for (let i = 2; i < 10; i++) {
    ma.push(ma[i - 1] + ma[i - 2]);
}

console.table(ma);