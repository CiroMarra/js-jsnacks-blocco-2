// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

let pari = document.getElementById('pari');
    pari.classList.add('green');

let dispari = document.getElementById('dispari');
    dispari.classList.add('red');    

const numbers = [1,2,3,4,5,6,7,8,9,10];
const even = [];
const odd = [];

for (let i=0; i < numbers.length; i++ ) {
    if (numbers[i] % 2 ===0 ) {
        even.push(numbers[i]);
    } else {
        odd.push(numbers[i]);
    }
}
console.log(even);
console.log(odd);


document.getElementById('pari').innerHTML = even.join (" ")
document.getElementById('dispari').innerHTML = odd.join (" ")




