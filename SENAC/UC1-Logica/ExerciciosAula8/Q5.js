let salary = 2000
let performanceEvaluation = "A"
let adjustedSalary

switch(performanceEvaluation){
    case "A":
        adjustedSalary = salary *1.1
        break
    case "B":
        adjustedSalary = salary * 1.05
        break
    case "C":
        console.log(`O salário ${salary} não recebeu ajustes devido à performance nota C`)
        return
    default:
        console.log("Valor Inválido")
        return
}

console.log(`O salário ${salary} foi ajustado para ${adjustedSalary} devido à performance nota ${performanceEvaluation}`)