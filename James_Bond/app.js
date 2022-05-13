// console.log(document);

const tagH1 = document.querySelector('h1');
const tagHK = document.querySelector('h1 + h1'); // element+element parenka sekanti tokio paties tag'o elementa;
const tagAll = document.querySelectorAll('h1');

console.log(tagH1);
console.log(tagHK);
console.log(tagAll); // console.log(tagAll[1]) galima selectint viena;

tagAll.forEach(h1 => {
    console.log(h1);
    h1.style.color = 'blue';
    h1.style.backgroundColor = 'rgb(255, 255, 0)';
    h1.style.border = '5px solid tomato';
    h1.style.padding = '20px';
    h1.innerText = 'Valio';
    h1.innerHTML = '<i>Valio valio</i>';
});

// EVENT
// 1. Susirandam elementa, kuri stebesim <>;
// 2. Susirandam ivyki;
// 3. Pradedame stebeti. Vienu metu galima stebeti vieno elemento viena ivyki;

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => { // f-ja, kuri pasileis, kai ivykis ivyks
//     console.log('Atliktas paspaudimas');
//     btn.style.color = btn.style.color === 'red' ? 'black' : 'red';
// });

// tagAll.forEach(h1 => {
//     h1.addEventListener('click', () => {
//     h1.style.color = h1.style.color === 'red' ? 'blue' : 'red';
//     console.log(e);
//     });
// });

// document.querySelector('a').addEventListener('click', e => {
//     e.preventDefault();
//     e.target.style.color = 'red';
// });

document.querySelector('#vaikas').addEventListener('click', e => {
    e.stopPropagation(); // sustabdo bubble'inimasi;
    console.log('vaikas');
    e.target.style.backgroundColor = 'red';
});

document.querySelector('#tevas').addEventListener('click', e => {
    console.log('tevas', e.target);
    document.querySelector('#tevas').style.backgroundColor = 'red';
});
