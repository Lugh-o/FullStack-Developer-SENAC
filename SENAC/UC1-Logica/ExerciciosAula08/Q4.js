let numDay = 4
let strDay

switch(numDay){
    case 1:
        strDay = "Domingo"
        break
    case 2:
        strDay = "Segunda-Feira"
        break
    case 3:
        strDay = "Terça-Feira"
        break
    case 4:
        strDay = "Quarta-Feira"
        break
    case 5:
        strDay = "Quinta-Feira"
        break   
    case 6:
        strDay = "Sexta-Feira"
        break  
    case 7:
        strDay = "Sábado"
        break  
}

console.log(`O dia ${numDay} equivale a ${strDay}`)