function load(){
    let msg = window.document.getElementById("msg")
    let img = window.document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora < 4 || hora > 18){
        img.src = "assets/fotonoite.jpg"
        document.body.style.background = '#23385d'
        document.body.color = '#ffffff'
    } else if(hora > 4 && hora < 14){
        img.src = "assets/fotomanha.jpg"
        document.body.style.background = '#ffff89'
    } else {
        img.src = "assets/fototarde.jpg"
        document.body.style.background = '#cf9812'
    }


}