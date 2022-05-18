function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('----------- 7 ----------');

const monsterSize = rand(10, 30);

const makeNiceArray = () => {
    const array = [];
    const size = rand(10, 20);
    for (let i = 0; i < size; i++) {
        array.push(rand(0, 10));
    }
    return array;
}

let monster = [];
for (let sizeNumber = 0; sizeNumber < monsterSize; sizeNumber++) {
    const monsterPart = makeNiceArray();
    if (!sizeNumber) {
        monsterPart[monsterPart.length - 1] = 0;
    } else {
        monsterPart[monsterPart.length - 1] = monster;
        
    }
    monster = monsterPart;
}

console.log(monster);

console.log('----------- 10 ----------');

const prime = (a) => {
    if (typeof a !== 'number' || !isFinite(a)) {
        `ERROR: turi buti tik sveikieji skaiciai.`
    }
    let daliklis = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0 && 
            a / i !== a && 
            a / i !== 1) {
            daliklis++;
        }
    } return daliklis;
};

const sqArray = [];

for (let i = 0; i < 10; i++) {
    const row = [];
    for (let y = 0; y < 10; y++) {
        row.push(rand(1, 100));
    }
    sqArray.push(row);
    
}

console.table(sqArray);

const primeSum = a => {
    let sum = 0;
    let count = 0;
    a.forEach(e => e.forEach(v => {
        if (!prime(v)) {
            count++;
            sum += v;
        }
    }));
    return count ? sum / count : 0;
};

console.log(primeSum(sqArray));

const findMin = a => {
    let min = a[0][0];
    let coord = [0, 0];
    a.forEach((r, ri) => r.forEach((v, ci) => {
        if (v < min) {
            min = v;
            coord = [ri, ci];
            
        }
    }));
    return coord;
}

console.log(findMin(sqArray));

let s = 1000;
while (primeSum(sqArray) < 70) {
    if (--s === 0) {
        console.log('BR');
        break;
    }
    const [x, y] = findMin(sqArray);
    sqArray[x][y] += 3;
};

console.log('----------- 5 ----------');

const longSet1 = new Set() // unikalios reiksmes

do {

    longSet1.add(rand(100, 999));

} while (longSet1.size < 100);

const longArray = [...longSet1];

console.log(longArray);


const longSet2 = new Set() // unikalios reiksmes

do {

    longSet2.add(rand(100, 999));

} while (longSet2.size < 100);

const longArray2 = [...longSet2];

console.log(longArray2);


const freakArray = [];

longArray.forEach((v, i) => {

    freakArray[v] = longArray2[i];
});

console.table(freakArray);

console.log('----------- 8 ----------');

const whiteCat = [rand(1, 33), rand(1, 33), rand(1, 33), rand(1, 33)];

const yesOrNo = (a, c = 3) => {
    for (let i = 0; i < 3; i++) {
        if (prime(a.slice(-3)[i])) {
            return true;
        }
    }
    return false;
}

while(yesOrNo(whiteCat)) {
    whiteCat.push(rand(1, 33));
}

console.log(whiteCat);
