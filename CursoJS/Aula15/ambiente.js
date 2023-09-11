// Vetores (arrays) ou variáveis compostas
let num = [5, 2, 8, 9, 3];
num[5] = 7; // Acrescenta a posição 5 e adiciona um valor nesse endereço
num.push(1); // Adiciona um valor, nesse caso 1, no final do vetor
num.sort(); // Coloca em ordem crescente a array
console.log(num);
console.log(`O vetor possui ${num.length} elementos.`);
console.log(`O primeiro valor do vetor é ${num[0]}.`);
console.log(`O último valor do vetor é ${num[6]}.`);

// Abaixo a sintaxe do for que só funciona com vetores e objetos

for (a in num) {
    console.log(`A posição ${a} tem o valor ${num[a]}`);
}

let b = num.indexOf(7); // Retorna o endereço que um valor, 7 nesse caso, se encontra no vetor
let c = num.indexOf(10); // Retorna -1, pois o valor não está contido na array
console.log(`O valor 7 está na posição ${b}.`);

if (c == -1) {
    console.log('O valor não foi encontrado!');
}
/*

while (a < num.length) { 
    // Não pode ser "<=" já que há 7 elementos na array, contudo a última key é 6
    console.log(`A posição ${a} tem o valor ${num[a]}`);
    a++;
}

do { 
    console.log(`A posição ${a} tem o valor ${num[a]}`);
    a++;
} while (a < num.length)

for (a; a < num.length; a++) {
    console.log(`${num[a]}`);
}

*/