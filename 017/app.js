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


// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
    constructor() {
        let akmenuKiekis = 0;
    }

    prideti1Akmeni = () => {
        this.akmenuKiekis1 = 1;
        console.log(this.akmenuKiekis1);
    }
    pridetiDaugAkmenu = () => {
        this.akmenuKiekisDaug = 10;
        console.log(this.akmenuKiekisDaug);
    }
    kiekPririnktaAkmenu = () => {
        this.akmenuKiekis = this.akmenuKiekis1 + this.akmenuKiekisDaug;
        console.log(this.akmenuKiekis);
    }
}

const kibiras = new Kibiras1();
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu();
kibiras.kiekPririnktaAkmenu();


const m = new Map();

// raktais Map'e gali buti bet kas : objektai ar stringai;
m.set('cat1', myCat); // ( indexas, elementas)
m.set('cat2', myCat22);

m.set({id:1}, myCat);
m.set({id:1}, myCat22);
m.set({id:1}, myCat22);

console.log(m.get('cat1'));
console.log(m.size);

