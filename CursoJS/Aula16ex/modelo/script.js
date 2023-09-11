var num = window.document.getElementById('num');
var val = window.document.querySelector('select#area');
var res = window.document.createElement('div');
var saida = window.document.getElementById('out');
var arr = [];

function inVal(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (num.valueAsNumber < 1 || num.valueAsNumber > 100 || num.value.length == 0) {
        window.alert('Valor não existente ou fora dos parâmetros exigidos. Tente novamente!')
    } else if (!inVal(num.value, arr)) { // "!" significa "Não" em JS
        window.alert('Este valor já foi adicionado. Tente outro valor!');
    } else {
        arr.push(num.valueAsNumber)
        val.innerHTML += `<option>O valor adicionado foi ${num.valueAsNumber}</option>`;
    }
    num.value = '';
    num.focus();
    res.innerHTML = '';
}

function final() {
    saida.appendChild(res);

    var p, maior = 0, menor = 999, soma = 0;

    if (val.length == 0){
        window.alert('Adicione algum valor!');
    } else {
        for (p = 0; p < arr.length; p++) { // ou for (var p in val)
            if (Number(arr[p]) > maior) {
                maior = Number(arr[p]);
            } if (Number(arr[p]) < menor) {
                menor = Number(arr[p]);
            }
            soma += Number(arr[p]);
        }
    }

    let media = soma/Number(arr.length);

    return res.innerHTML = `Foram cadastrados ${arr.length} números.<br>O maior valor é ${maior}.<br>O menor valor é ${menor}.<br>A soma entre todos os valores é ${soma}.<br>A média dos valores é ${media}.`;
}
