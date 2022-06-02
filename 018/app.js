// STATIC

// noredami pasiekti klase this.constructor...
// statiniame metode this...

class Stikline {

    static type = 'Pepsi'; // 'type' gali but bet koks pav.
    static registras = [];

    static naujaStikline(t) {
        return new this(t);
    }

    static whatType() {
        console.log(this.type);
    }

    static visosStiklines(stikline) {
        this.registras.push(stikline);
    }

    constructor(t) {
        this.turis = t;
        this.kiekis = 0;
        this.constructor.visosStiklines(this); // (this) stiklines objektas;
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
        console.log(`Stiklinėje yra: ${this.turis} ml yra ${this.kiekis} ${this.constructor.type}.`);
    }
}

const stikline1 = new Stikline(200);
const stikline2 = Stikline.naujaStikline(300);
const stikline3 = new Stikline(100);

stikline3.ipilti(stikline2.ipilti(stikline1.ipilti(80).ispilti()).ispilti());

// stikline1.ipilti(1000);
// stikline2.ipilti(stikline1.ispilti());
// stikline3.ipilti(stikline2.ispilti());

Stikline.registras[0].ipilti(40);

stikline1.stiklinejeYra();
stikline2.stiklinejeYra();
stikline3.stiklinejeYra();

Stikline.whatType();

console.log(Stikline.type);

console.log(Stikline.registras);