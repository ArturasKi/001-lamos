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

// OBJEKTAI

const kazkas = 'kansdladasd';

const namasSuKaminu = {
    kaminas: 'yra 3 metrai',
    gyventojai: ['Petras', 'Asilas', 'Barsukas', 'Kate'],
    tas: kazkas
};

namasSuKaminu.animals = {cat: 'Murka', dog: 'Brisius'};

namasSuKaminu.tas = 888;

console.log(namasSuKaminu.animals.cat);

// const namasSuKaminu2 = namasSuKaminu; // lieka tas pats objektas su dviem vardais

const namasSuKaminu2 = JSON.parse(JSON.stringify(namasSuKaminu)); // kopijuoja objekta;

namasSuKaminu2.animals.cat = 'Kitas katinas';

console.log(namasSuKaminu.animals.cat);

// const n4 = n1.slice(); // 'slice' padaro totaliai atskira nama - tikra kopija, naudojamas tik masyvo kopijavimui;
const n4 = [...n1]; // kopijavimas;

// n4.shift();

const a1 = {cat: 'Murka', dog: 'Brisius'};
const a2 = {...a1}; // ... - destruktorius (isardo i gabalus);

console.log(n1);
console.log(n4);

console.log(namasSuKaminu, namasSuKaminu2);

// MAP - objektas;

const map = new Map();

map.set('Murka', 5); // unikalus
map.set('Pilkis', 8);
map.set('Pukis', 4);

console.log(map.get('Pilkis'));
console.log(map.has('Pilkis'));
// map.delete('Pilkis'); // istrina

const masmap = [...map]; // sukuriam masyva is map;

console.log(masmap);
console.log(map.size);

