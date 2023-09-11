function fatorial(n) {
    let fat = 1;
    for (let c = n; c > 1; c--) {
        fat *= c; // fat = fat * c
    }
    return fat;
}

console.log(`5! = ${fatorial(5)}`);