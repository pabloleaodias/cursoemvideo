


function gerar() {
    var valor = window.document.getElementById('num');
    var tab = window.document.querySelector('select#txt');

    if (valor.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        var a = valor.valueAsNumber; // alternativa ao Number(valor.value)
        var b = 1;
        tab.innerHTML = '';
        if (a >= 0) {
            do {
                var item = window.document.createElement('option');
                item.text = `${a} x ${b} = ${a * b}`;
                item.value = `tab${b}`; // Para o JS não é necessário, as é útil para outras linguagens
                tab.appendChild(item);
                b++;
            } while (b <= 10)
        } else {
            do {
                var item = window.document.createElement('option');
                item.text = `${a} x ${b} = ${a * b}`;
                tab.appendChild(item);
                b++;
            } while (b <= 10)
        }
    }
}