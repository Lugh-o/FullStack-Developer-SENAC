let age = 73
let sex = "M"
let canRetire


if(sex === "M"){
    canRetire = age >= 65 ? "pode" : "não pode"
} else { 
    canRetire = age >= 60 ? "pode" : "não pode"
}
sex = sex === "M" ? "masculino" : "feminino"

console.log(`A pessoa do sexo ${sex} com ${age} anos de idade ${canRetire} se aposentar`)