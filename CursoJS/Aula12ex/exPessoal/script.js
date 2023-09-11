function carregar() {
    var sex = window.document.getElementsByName('radsex');
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = window.document.getElementById('txtano');
    var idade = ano - Number(nasc.value);
    var contato = window.document.querySelector('input#txtstart');
    var time = window.document.getElementById('txttime');
    var res = window.document.getElementById('res');

    if (Number(nasc.value) > ano || Number(nasc.value) == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else if (idade < Number(contato.value) || idade < Number(time.value)) {
        window.alert('[ERRO] Há uma impossibilidade lógica nos dados. Tente novamente!');
    } else if (idade <= 21 && Number(time.value) <= 2 && sex[0].checked) {
        res.innerHTML = `Você é um jovem Programador Júnior.<br>Sua jornada promissora na área só está começando!`;
    } else if (idade <= 21 && Number(time.value) <= 2 && sex[1].checked) {
        res.innerHTML = `Você é uma jovem Programadora Júnior.<br>Sua jornada promissora na área só está começando!`;
    } else if (idade <= 21 && Number(time.value) <= 7 && sex[0].checked) {
        res.innerHTML = `Você é um jovem Programador Pleno.<br>Bastante experiente para a idade!`;
    } else if (idade <= 21 && Number(time.value) <= 7 && sex[1].checked) {
        res.innerHTML = `Você é uma jovem Programadora Pleno.<br>Bastante experiente para a idade!`;
    } else if (idade <= 21 && Number(time.value) >= 8 && sex[0].checked) {
        res.innerHTML = `Você é um jovem Programador Sênior.<br>Um verdadeiro Prodígio!`;
    } else if (idade <= 21 && Number(time.value) >= 8 && sex[1].checked) {
        res.innerHTML = `Você é uma jovem Programadora Sênior.<br>Uma verdadeira Prodígio!`;
    } else if (idade <= 59 && Number(time.value) <= 2 && sex[0].checked) {
        res.innerHTML = `Você é um Programador Júnior.<br>Sua jornada de sucesso na área só está começando!`;
    } else if (idade <= 59 && Number(time.value) <= 2 && sex[1].checked) {
        res.innerHTML = `Você é uma Programadora Júnior.<br>Sua jornada de sucesso na área só está começando!`;
    } else if (idade <= 59 && Number(time.value) <= 7 && sex[0].checked) {
        res.innerHTML = `Você é um Programador Pleno.<br>Já tem uma boa experiência na área!`;
    } else if (idade <= 59 && Number(time.value) <= 7 && sex[1].checked) {
        res.innerHTML = `Você é uma Programadora Pleno.<br>Já tem uma boa experiência na área!`;
    } else if (idade <= 59 && Number(time.value) >= 8 && sex[0].checked) {
        res.innerHTML = `Vocé é um Programador Sênior.<br>Meus parabéns pela dedicação!`;
    } else if (idade <= 59 && Number(time.value) >= 8 && sex[1].checked) {
        res.innerHTML = `Vocé é uma Programadora Sênior.<br>Meus parabéns pela dedicação!`;
    } else if (idade >= 60 && Number(time.value) <= 2 && sex[0].checked) {
        res.innerHTML = 'Você é um idoso Programador Júnior.<br>Boa sorte na sua nova jornada, vovô!';
    } else if (idade >= 60 && Number(time.value) <= 2 && sex[1].checked) {
        res.innerHTML = 'Você é uma idosa Programadora Júnior.<br>Boa sorte na sua nova jornada, vovó!';
    } else if (idade >= 60 && Number(time.value) <= 7 && sex[0].checked) {
        res.innerHTML = `Você é um idoso Programador Pleno.<br>Está indo muito bem, vovô!`;
    } else if (idade >= 60 && Number(time.value) <= 7 && sex[1].checked) {
        res.innerHTML = `Você é uma idosa Programadora Pleno.<br>Está indo muito bem, vovó!`;
    } else if (idade >= 60 && Number(time.value) >= 8 && sex[0].checked) {
        res.innerHTML = `Você é um idoso Programador Sênior.<br>Um veterano na computação!`;
    } else if (idade >= 60 && Number(time.value) >= 8 && sex[1].checked) {
        res.innerHTML = `Você é uma idosa Programadora Sênior.<br>Uma veterana na computação!`;
    }
}