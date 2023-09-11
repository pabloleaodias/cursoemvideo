

function contagem() {
    var start = window.document.getElementById('inicio');
    var end = window.document.getElementById('fim');
    var step = window.document.getElementById('passo');
    var res = window.document.querySelector('div#res');

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
    } else {
        var a = Number(start.value);
        var b = Number(end.value);
        var c = Number(step.value);
        res.innerHTML = 'Contando: <br>';
        } if (a <= b) {
            // Contagem crescente
            if (c <= 0) {
                window.alert('Passo inválido! Considerando PASSO igual a 1')
                c = 1
            } for (let cont = a; cont <= b; cont += c) {
                res.innerHTML += `${cont} \u{1F449} `;
            }
            res.innerHTML += `\u{1F3C1}`;
        } else {
            // Contagem regressiva
            if (c <= 0) {
                window.alert('Passo inválido! Considerando PASSO igual a 1')
                c = 1
            } for (let cont = a; cont >= b; cont -= c) {
                res.innerHTML += `${cont} \u{1F449} `; 
            }
            res.innerHTML += `\u{1F3C1}`
        }
}