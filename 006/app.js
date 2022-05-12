// FUNKCIJOS

// funkcijos parametras - argumentas neturintis reiksmes, argumentas - gryna reiksme, kuri perduodama i funkcijos parametra;

// function fun() - funkcijos deklaracija, kuri nera vykdoma iki tol kol buna iskviesta;
// fun() - funkcijos iskvietimas;
// parametrai naudojami, kada funkcija deklaruojame, argumentai - kada funkcija kvieciame;

// const B = 8 -> pirmiausia patenka i iskviesta funkcija, tada vykdoma deklaracija;
// function fun(B) {};
// function(B);

// const b = 'babaJaga';

// function fun(ki, li) {
//     console.log(ki);
//     console.log(li);
// }

// fun(b);
// fun('geras', 'zuikis');
// fun(b);
// fun('blogas');
// fun(b);

const b = 5;

function fun(ki, li) {
    console.log(ki);
    console.log(li);
    const rez1 = ki + li;
    const rez2 = ki * li;
    return [rez1, rez2]; // grazinama tik viena reiksme;
}

const [gavau1, gavau2] = fun(5, 7); // is funkcijos masyvo grazinam atskiras reiksmes.
console.log(gavau1, gavau2);


// PAPRASTOJI BEVARDE FUNKCIJA (negalima overwrite'inti)
const beVardo = function() {
    console.log('As neturiu vardo!');
}

beVardo();

// VARDINE FUNKCIJA (galima overwrite'inti)
function suVardu() {
    console.log('As turiu grazu varda!');
}

function suVardu() {
    console.log('blablabla');
}

suVardu();

// ARROW FUNKCIJA

const strele = () => {
    console.log('As streline funckija.');
}

strele();

const vienas = y => {
    console.log('As streline funckija VIENAS.'); // kai yra riestiniai skliaustai return butinas;
}
vienas();

const vienasvienas = y => {
    return 'As streline funckija VIENASVIENAS.'; // kai yra riestiniai skliaustai return butinas;
}
console.log(vienasvienas());

const du = y => console.log('As streline funckija DU.'); // jei telpa i viena eilute, galima nerasyti riestiniu skliaustu; return yra padarytas is anksto ir nereikia rasyti;
du();

const dudu = y => 'As streline funckija DUDU.';
console.log(dudu());