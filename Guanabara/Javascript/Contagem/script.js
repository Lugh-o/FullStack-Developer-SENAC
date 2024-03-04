function conferir(){
    let startInput = window.document.getElementById("txtstart").value
    let endInput = window.document.getElementById("txtend").value
    let stepInput = window.document.getElementById("txtstep").value
    let res = window.document.getElementById("res")

    if(startInput.lenght === 0 || endInput.length === 0 || stepInput.lenght === 0){
        res.innerHTML = 'Faltam dados. Por favor preencha todos os campos'
        return
    }

    let startNum = Number(startInput)
    let endNum = Number(endInput)
    let stepNum = Number(stepInput)
    
    if(stepNum <= 0){
        res.innerHTML = "Valor do passo inválido! Por favor escreva um valor maior que zero."
        return
    }

    res.innerHTML = ``
    if(startNum > endNum){
        for(i = startNum; i >= endNum; i -= stepNum){
            res.innerHTML += `${i} -> `
        }
    } else{
        for(i = startNum; i <= endNum; i += stepNum){
            res.innerHTML += `${i} -> `
        }
    }
    res.innerHTML += `Fim`

}