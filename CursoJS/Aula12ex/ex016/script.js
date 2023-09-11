function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = window.document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'masculino';
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'bebe-m.jpg');
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem-m.jpg');
            } else if (idade < 60) {
                // ADULTO
                img.setAttribute('src', 'adulto-m.jpg');
            } else {
                // IDOSO
                img.setAttribute('src', 'idoso-m.jpg');
            }
        } else {
            genero = 'feminino';
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'bebe-f.jpg');
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem-f.jpg');
            } else if (idade < 60) {
                // ADULTO
                img.setAttribute('src', 'adulta-f.jpg');
            } else {
                // IDOSO
                img.setAttribute('src', 'idosa-f.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos o gênero <strong>${genero}</strong> com idade de <strong>${idade}</strong> anos.`;
        res.appendChild(img);
    }
}