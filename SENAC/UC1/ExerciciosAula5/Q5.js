let age = 20
let category = ""

if(0 <= age <= 11){
    category = "uma criança"
} else if(12 <= age <= 17){
    category = "um adolescente"
} else if(18 <= age <= 59){
    category = "um adulto"
} else{
    category = "um idoso"
}

console.log(`A pessoa é ${category}`)