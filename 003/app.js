// FOR kai zinome is anksto, kiek naudosime ciklu.

// WHILE kai nezinome tikslaus ciklu skaiciaus, ciklas suksis, kol bus pasiektas rezultatas, kai ciklu kiekis nuo 0 -> begalybes.

// DO...WHILE, kai ciklu kiekis nuo 1 -> begalybes.

// FOR EACH kiekvieno objekto savybes perzvelgia.

// break; -> nutraukia cikla.
// continue; -> nutraukia tik viena kazkoki ciklo prasukima.

let a = 0;
let b = 0;

while (b < -10) {
    if (++a > 100) { // saugiklis nuo amzino ciklo
        console.log('avarija');
        break; 
    }
    // console.log(b) jei viduje rodo kiekvieno ciklo verte
    b++;
}

console.log(b) // isoreje bloko rodo galutini skaiciu

let c = 0;

do {
    if (++a > 100) { // saugiklis nuo amzino ciklo
        console.log('avarija');
        break;
    }
    c++;
} while (c < -10);

console.log(b, c);

// while iskart nutraukiama jei 0 < -10;
// do while 0 < -10 nutraukiama po 1 ciklo;

for (let i = 0; i < 10; i++) {

    if (i === 2) {
        break;
    }

    if (i === 6 || i === 3) {
        continue; // nutraukia 6 ir 3 ciklu prasukima ir vaziuoja toliau
    }

    console.log(`Dabar sukasi:
     ${i + 1} ciklas`); // `` -> galima dalinti i kelias eilutes.
}

// CIKLAS CIKLE

for (let i = 0; i < 5; i++) {
    console.log(`Dabar vykdomas DIDELIS: ${i + 1} ciklas`);

    for (let j = 0; j < 3; j++) {
        console.log(`Dabar vykdomas MAZIUKAS: ${j + 1} ciklas`);
    }
}

// Leksteje gali buti 10...30 kasniu kotleto. 
// Kasnis susikramto per rand 1...10 krimstelejimu.
// Kasnis susikramto neaisku kaip - tikrinti po kiekvieno krimstelejimo.

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const kotletoKasniai = rand(10, 30);
let kotletasSuvalgytasPer = 0;

for (let i = 0; i < kotletoKasniai; i++) {

    // const gabaliukasSukramtomas = rand(1, 10);
    // kotletasSuvalgytasPer += gabaliukasSukramtomas;
    let r;

    do {
        r = rand(0, 4);
        kotletasSuvalgytasPer++ // kintamasis turi buti deklaruojamas uz ciklo ribu, kitaip neiseis i isore.
    } while (r); 
}

console.log(`${kotletasSuvalgytasPer} krimstelejimus`);


