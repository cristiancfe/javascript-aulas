var w = '';
var x;
var y = undefined;
var z = 0;
console.log(typeof w);
console.log(typeof x);
console.log(typeof y);
console.log(typeof 0);

let n= 0 <= 0;
let n1=1 < 1;
let n2 = -2 > -22;
let n3 = -22 > 0;
console.log(n,n1,n2,n3);

var idadeMinima =  18;
console.log(idadeMinima);

if (50 > 100) {
  console.log("Falta um tanto");
} else {
  if ("1" == "-1") {
    console.log("Quase lá");    
  }

  if (!null) {
    console.log("Sucesso");
  }
}
console.clear();
// while (true) {
//   console.log("Olá, mundo");
// }

// for (let i = 0; i <= 9; i+=2) {
//      console.log(i);
// }
var array = [2, 5, 9];
console.log(array.indexOf(2));
console.log(array.indexOf(7));
console.log(array.indexOf(9, 2));

console.clear();

function funcao(array) {
  let acc = 0;

  for (let elemento of array) {
    acc += elemento;
  }

  return (acc / array.length);
}

console.log(funcao([4, 6, 4, 2]));