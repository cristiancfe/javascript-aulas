const input = require('readline-sync');

const numero_sortedo =(Math.floor(Math.random() *10)); 
// console.log(numero_sortedo); 

let num = Number(input.question('qual numero vc escolhe?')); 

while(num !== numero_sortedo){
  console.log('vc errou, tente novamente');
   num = Number(input.question('qual numero vc escolhe?'));
}
  console.log('vc acertou');
