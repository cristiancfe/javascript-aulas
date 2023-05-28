let array = ['cristian', 'sandra', 'Miguel', 'Sibele']

//mostras os elemtos do array
for(let elemento of array){
  console.log(elemento);
}

//mostra as posições dos elementos
for(let elemento in array){
  console.log(elemento);
}
console.clear();
 let array_vazio = [];
 //adicionando elementos em array vazio
 array_vazio.push(10,20);
 console.log(array_vazio);

//pegar somente alguns elementos do array
 let array_slice = [50,60,70,80];
 //mostra o elemento 0 e do segundo elemento do arrray
 console.log(array_slice.slice(0,2));
 //mostra apartir do segundo elementos todos elementos do array
 console.log(array_slice.slice(2));

 console.clear();

 /*comando array.unshift(o) coloca zero no inicio do array, por padrão se não utilizar unshift ele coloca no fim do array
  remover elementos de array
  array.shift(); retira o primeiro elemento do array
 array.pop(); retira o último elemento do array
 CONCATENAR ARRAYS juntar dois arrays usando  array1.concat(array2)
 encontrar indice de elemento usando array.indexOf(34) mostra a posição 3
 inverter ordem dos elementos no array array.reverse()
 procurar se array tem elemento 4 array.includes(4)
 




*/