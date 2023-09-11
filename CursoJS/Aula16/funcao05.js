// RECURSSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1); // A função CHAMA ela mesma, criando um LOOP
    }
}

console.log(fatorial(5))