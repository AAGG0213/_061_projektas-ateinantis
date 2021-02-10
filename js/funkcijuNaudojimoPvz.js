
// iprasta funkcija
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 5));

function atimtis(a, b) {
    return a - b;
}
console.log(atimtis(4, 5));

// kintamajam priskirta anonimine funkcija
const atimtis2 = function (a, b) { 
    return a - b;
}
console.log(atimtis2(4, 5));

// iprasta rodykline funkcija (arrow function)
// (parametru blokas) => {logikos blokas}
const daugyba = (a, b) => { 
    return a * b;
}
console.log(daugyba(4, 5));

// arrow function, kai turima tik viena procedura
const dalyba = (a, b) => a / b;
console.log(dalyba(4, 5));


// arrow function, kai turima tik viena procedura
const kvadratu = (a) => a * a;
console.log(kvadratu(4));
// arba
const kvadratu2 = a => a * a;
console.log(kvadratu2(5));

// funkcija galima pirmiau panaudoti, o tik po to aprasyti 
// tai vadinama "hoistinimu"
// pats JS funkcija iskelia ausciau, negu jos panaudojimas
// const ir let uzrasymo seka l.svarbi
