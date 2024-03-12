let gradeNum = 100
let gradeConcept

if(gradeNum < 0 || gradeNum > 100){
    console.log("Valor inválido")
    return
} 
switch(true){
    case gradeNum >= 90:
        gradeConcept = "A"
        break
    case gradeNum >= 80:
        gradeConcept = "B"
        break    
    case gradeNum >= 70:
        gradeConcept = "C"
        break    
    case gradeNum >= 60:
        gradeConcept = "D"
        break
    default:
        gradeConcept = "F"
}

console.log(`A nota ${gradeNum} equivale a um ${gradeConcept}`)