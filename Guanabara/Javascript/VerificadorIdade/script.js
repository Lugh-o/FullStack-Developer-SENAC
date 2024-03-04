function setPhoto(age, gender, img){
    genderIndex = gender == 'masculino' ? 'm' : 'f'
    if(age >= 0 && age < 10){
        img.setAttribute('src',`assets/bebe-${genderIndex}.jpg`)
    } else if(age < 21) {
        img.setAttribute('src',`assets/jovem-${genderIndex}.jpg`)
    } else if(age < 50){
        img.setAttribute('src',`assets/adulto-${genderIndex}.jpg`)
    } else{
        img.setAttribute('src',`assets/idoso-${genderIndex}.jpg`)
    }
}

function verificar(){
    let data = new Date()
    let year = data.getFullYear()
    let yearInput = window.document.getElementById("txtano")
    let res = window.document.getElementById("res")
    if(yearInput.value.length === 0 || yearInput.value > year){
        window.alert("Erro")
    } else{
        let sexInput = window.document.getElementsByName("radsex")
        let age = year - Number(yearInput.value)
        let gender = ""
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexInput[0].checked){
            gender = "masculino"
            setPhoto(age, gender, img)
        } else{
            gender = "feminino"
            setPhoto(age, gender, img)
        }
        img.setAttribute('width', '200px')
        res.style.textAlign = 'center'
        res.innerHTML = `Detactamos uma pessoa do gênero ${gender} com ${age} anos de idade.<br/>`
        res.appendChild(img)
    }
}