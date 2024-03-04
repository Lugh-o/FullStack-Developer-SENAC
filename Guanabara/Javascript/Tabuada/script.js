function multTable(){
    let numInput = window.document.getElementById('num').value
    let tab = window.document.getElementById('tab')
    if(numInput.length === 0){
        window.alert('Por favor preencha o campo.')
        return
    }

    tab.innerHTML = ''
    let numValue = Number(numInput)
    for(i = 0; i <= 10; i++){
        let item = document.createElement('option')
        item.text = `${numValue} x ${i} = ${numValue*i}`
        item.value = `tab${i}`
        tab.appendChild(item)

    }

}