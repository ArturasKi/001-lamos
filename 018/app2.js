class Senelis {

    constructor() {
        this.name = 'Bronius';
        // console.log('SEN');
    }

    bliauti() {
        console.log('uuuuuuuuuu');
    }

    miegoti() {
        console.log('pssssssss');
    }
}

class Tevas extends Senelis {

    constructor() {
        super();
        this.name = 'Kazys';
        this.barti = this.barti.bind(this);
        // console.log('TEV');
    }

    barti() {
        console.log(this); // arrow f-ja paveldi this, o paprasta f-ja paima is vaiko;
    }
}

class Vaikutis extends Tevas {  // extends class - perduoda klases visus metodus;
    
    constructor() {
        super(); // jei aukstesnes klases konstruktoriuje jau yra kazkas, zemesnes klases konstruktoriuje reikia iskviesti f-ja super();
        this.name = 'Petras';
        // console.log('VAIK');
    }
    
    bliauti() {
        console.log('Beeee');
    }
}

const s = new Senelis();
const t = new Tevas();
const v = new Vaikutis();


console.log(v.name);

v.bliauti();
v.barti();
v.miegoti();

document.querySelector('button')
.addEventListener('click', v.barti)