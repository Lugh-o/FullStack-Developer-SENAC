let age = 20
let category;

switch(true){
    case 5 < age < 7:
        category = "Infantil A"
        break
    case 8 < age < 11:
        category = "Infantil B"
        break
    case 12 < age < 13:
        category = "Juvenil A"
        break
    case 14 < age < 18:
        category = "Juvenil B"
        break
    case age > 18:
        category = "Adultos"
        break   
    default:
        console.log("Valor Inválido")
        return 
}

console.log(`O nadador é da categoria ${category}`)