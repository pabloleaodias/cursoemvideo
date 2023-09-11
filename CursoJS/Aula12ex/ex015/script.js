/*function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.setAttribute('src','fotomanha.png')

    } else if (hora >= 12 && hora < 18) {
        img.setAttribute('src','fototarde.png')

    } else {
        img.setAttribute('src','fotonoite.png')
        
    }

}*/
function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`;
        img.src = 'imagens/fotomanha.png';
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`;
        img.src = 'imagens/fototarde.png';
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`;
        img.src = 'imagens/fotonoite.png';
        document.body.style.background = '#515154'
    }
}
