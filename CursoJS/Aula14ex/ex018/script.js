


function gerar() {
    var valor = window.document.getElementById('num');
    var tab = window.document.querySelector('select#txt');

    if (valor.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        var a = valor.valueAsNumber; // alternativa ao Number(valor.value)
        var b = 1;
        var c = '';
        if (a >= 0) {
            for (b; b <= 10; b++) {
                /*let item = window.document.createElement('option');*/
                c += `<option>${a} x ${b} = ${a * b}</option>`;
            }
            tab.innerHTML = c;
        } else {
            for (b; b <= 10; b++) {
                c += `<option>${a} x ${b} = ${a * b}</option>`;
            }
            tab.innerHTML = c;
        }
    }
}