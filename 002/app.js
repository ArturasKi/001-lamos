console.log('Hello');

let skaicius = 0;
let netikrasSkaicius = '444';
let loginis = false;

console.log(typeof skaicius);
console.log(typeof netikrasSkaicius);
console.log(typeof loginis);

console.log(!!skaicius); // neigimo neigimas
console.log(!!'');
console.log(!!' ');

if(netikrasSkaicius) {
    console.log('Yes');
} 
// else if (skaicius) {
//     console.log('Nezinau');
// }
else {
    console.log('No');
}


console.log(true || false); // renkasi visada pirmiau true, nesvarbu kiek salygu bus
console.log(true && false); // renkasi visada pirmiau false, nesvarbu kiek salygu bus

/*
> <===> <=
< <===> >=
== <===> !=
|| <===> &&
*/  

console.log('---', !'6', !!6); // ! ===> neigia (pavercia i Boolean), !! ===> neigimo neigimas
console.log('---', + '6', '6'); // + '6' ===> pavercia stringa i skaiciu
console.log('ddd', 7, '' + 7); // '' + 7 ===> pavercia skaiciu i stringa

let kas = '';

switch(kas) {
    case 'anas':
        console.log('ANAS');
        break;
    case 'tas':
        console.log('TAS');
        break;
    case 'antis':
        console.log('ANTIS');
        break;
    default:
        console.log('LABANAKT');
}


let b = 'labas';

if(3 < 7) {
    let a = 'valio';
    let b = 'valio';
    console.log(b);
}

console.log(b);
console.log(a);
