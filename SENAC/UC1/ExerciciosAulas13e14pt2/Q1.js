function contarLetras(string){
    let rejects = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '!', '@', '#', '$', '%', '&', '*', '(', ')', '?'] //tudo pra nao ter que usar regex
    rejects.forEach(function(letter){
        string = string.replaceAll(letter, '')
    })
    return string.length
}

console.log(contarLetras("Hel2lo Wor2l!d"))