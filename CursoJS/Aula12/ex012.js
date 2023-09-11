var idade = 20;
console.log(`Você tem ${idade} anos de idade!`);
if (idade >= 16 && idade < 18 || idade > 65) { 
    console.log('Vota Opcional!');
} else if (idade >= 18) {
        console.log('Voto Obrigatório!');
} else {
    console.log('Não vota!');    
}
