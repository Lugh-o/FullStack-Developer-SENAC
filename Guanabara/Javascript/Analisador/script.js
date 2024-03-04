let selectArray = []
let res = window.document.getElementById('res')
let numInput = window.document.getElementById('num')

function add(){
    let list = window.document.getElementById('list')
    let item = window.document.createElement('option')
    let num = Number(numInput.value)
    
    if(num > 100 || num < 1){
        res.innerHTML = `Por favor digite um numero entre 1 e 100`
    } else{
        res.innerHTML = ``
        selectArray.push(num)
        item.text = `Valor ${num} adicionado!`
        list.appendChild(item)
    }
    numInput.value = ``
    numInput.focus()
}

function analize(){
    let selectLen = selectArray.length
    if(selectLen === 0){
        res.innerHTML = `Por favor digite ao menos um valor.`
    } else{
        res.innerHTML = ``
        res.innerHTML += `Ao todo temos ${selectLen} números cadastrados<br/>`
        res.innerHTML += `O maior número cadastrado foi ${Math.max(...selectArray)}<br/>`
        res.innerHTML += `O menor número cadastrado foi ${Math.min(...selectArray)}<br/>`
        let sum = 0
        for(j = 0; j < selectLen; j++){
            sum += selectArray[j]
        }
        res.innerHTML += `Somando todos os valores, temos ${sum}<br/>`
        res.innerHTML += `A média dos valores digitados é ${+(sum/selectLen).toFixed(2)}<br/>`
    }
    numInput.value = ``
    numInput.focus()

}

function reset(){
    selectArray = []
    res.innerHTML = `Programa reiniciado!`
    list.innerHTML = ``
    numInput.value = ``
    numInput.focus()
}
