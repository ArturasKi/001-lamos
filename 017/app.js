// OBJEKTAS - JS viskas kas matoma yra objektas. Objektai yra sukuriama pagal tam tikra plana. Planas vadinasi klase;

let a = 'labas'; // pasleptas obj;

let b = new String('labas'); // atviras obj, sukurtas obj budu, String - klase, kuri nurodo kaip turi buti pagamintas objektas;
let c = Number(55);
let d = Array(55);

console.log(a.length);
console.log(typeof a);
console.log(b);
console.log(a + b);
console.log(typeof b);
console.log(c);
console.log(d);

String.prototype.tail = function() {
    return this.valueOf() + '-------------o';
} // egzistuojancios klases modifikacija pridedant savybe;

console.log(a.tail());


class Cat {
    // constructor'iuje galima rasyti bet koki koda;
    constructor(n) { // patenka is new Cat('')
        console.log('Naujas katinas');
        this.name = n ?? 'Bevardis';  // this.name kurdamas obj sukurtam katinui priskiriam varda;
    } 

    miau =  (m = '') => {
        console.log(this.name + ' Miauuuuuuu' + m);
    }
}

const myCat = new Cat('Pilkis');
const myCat22 = new Cat();

console.log(myCat.name);
console.log(myCat22.name);

myCat.miau(' jaja');
myCat22.miau(' kuku');

const m = new Map();

// raktais Map'e gali buti bet kas : objektai ar stringai;
m.set('cat1', myCat); // ( indexas, elementas)
m.set('cat2', myCat22);

m.set({id:1}, myCat);
m.set({id:1}, myCat22);
m.set({id:1}, myCat22);

console.log(m.get('cat1'));
console.log(m.size);

// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
console.log('Uzduotis #1');

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni = () => {
        this.akmenuKiekis += 1;

    }
    pridetiDaugAkmenu = (kiekis) => {
        this.akmenuKiekis += kiekis;

    }
    kiekPririnktaAkmenu = () => {
        console.log(`Iš viso pririnkta: ${this.akmenuKiekis}`);
    }
}

const kibiras = new Kibiras1();
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(16);
kibiras.kiekPririnktaAkmenu();

// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
console.log('Uzduotis #2');

class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    } 
    ideti = (kiekis) => {
        if (kiekis < 2) {
            this.metaliniaiPinigai += kiekis;
            return console.log(`Metaliniai pinigai: ${kiekis}`);
        }
            else this.popieriniaiPinigai += kiekis;
            return console.log(`Popieriniai pinigai: ${kiekis}`);
    }
    skaiciuoti = () => {
        console.log(`Iš viso: ${this.metaliniaiPinigai + this.popieriniaiPinigai}`);
    }
    // 6 užd.
    monetos = () => {
        this.metaliniaiPinigai;
        console.log(`Iš viso monetų: ${this.metaliniaiPinigai}`);
    }
    banknotai = () => {
        this.popieriniaiPinigai;
        console.log(`Iš viso banknotų: ${this.popieriniaiPinigai}`);
    }
}

const pinigai = new Pinigine();
pinigai.ideti(1);
pinigai.ideti(8);
pinigai.ideti(1);
pinigai.ideti(5);
pinigai.ideti(3);
pinigai.skaiciuoti();
pinigai.monetos();
pinigai.banknotai();

// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.
console.log('Uzduotis #3');

class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }
    ilipa(keleiviuSkaicius) {
        if (keleiviuSkaicius >= 0) {
            this.keleiviuSkaicius += keleiviuSkaicius;
        } else
        return console.log('Neigiamas keleiviu skaicius vaziuoti negali.');
    }
    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius >= 0) {
            this.keleiviuSkaicius = this.keleiviuSkaicius - keleiviuSkaicius;
        } else
        return console.log('Neigiamas keleiviu skaicius vaziuoti negali.');
    }
    vaziuoja() {
        if (this.keleiviuSkaicius <= 0) {
            return console.log('Neigiamas keleiviu skaicius vaziuoti negali.');
        } else
        return console.log(`Važiuojančių keleivių skaičius: ${this.keleiviuSkaicius}`);
    }
}

const keleiviai = new Troleibusas();

keleiviai.ilipa(8);
keleiviai.islipa(3);
keleiviai.vaziuoja();

// 6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.
console.log('Uzduotis #6 -> žr. #2');

// 8. Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų. Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
console.log('Uzduotis #8');

class Stikline {
    constructor(t) {
        this.turis = t;
        this.kiekis = 0;
    }
    ipilti = (kiekis) => {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this;
        // this.turis < kiekis ? console.log(`Įpiltas kiekis: ${this.turis}`) : console.log(`Įpiltas kiekis: ${this.kiekis += kiekis}`);
    }
    ispilti = () => {
        const kiek = this.kiekis;
        this.kiekis = 0;
        return kiek;
        // this.turis < this.kiekis ? console.log(`Išpiltas kiekis: ${this.turis}`) : console.log(`Išpiltas kiekis: ${this.kiekis}`);
    }
    stiklinejeYra = () => {
        console.log(`Stiklinėje yra: ${this.turis} ml yra ${this.kiekis} pepsio.`);
    }
}

const stikline1 = new Stikline(200);
const stikline2 = new Stikline(150);
const stikline3 = new Stikline(100);

stikline3.ipilti(stikline2.ipilti(stikline1.ipilti(80).ispilti()).ispilti());


// stikline1.ipilti(1000);
// stikline2.ipilti(stikline1.ispilti());
// stikline3.ipilti(stikline2.ispilti());

stikline1.stiklinejeYra();
stikline2.stiklinejeYra();
stikline3.stiklinejeYra();


// 9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).
console.log('Uzduotis #9');

const sample = arr => arr[Math.floor(Math.random() * arr.length)];
const random = sample([true, false]);
const random1 = sample([true, false]);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Grybas {
    constructor() {
        this.valgomas = random;
        this.sukirmijes = random1;
        this.svoris = rand(5, 45);
        console.log(`Valgomas: ${this.valgomas}, sukirmijęs: ${this.sukirmijes}, svoris: ${this.svoris}`);
    }
}

class Krepsys {
    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;

    }
    deti(grybas) {

    }
}

const grybas1 = new Grybas();
const grybas2 = new Grybas();

new Krepsys(grybas1);






