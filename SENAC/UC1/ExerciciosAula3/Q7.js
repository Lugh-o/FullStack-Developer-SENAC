let salarioBruto = 3000
let descontoINSS = salarioBruto*0.1
let descontoIR = salarioBruto*0.05
let salarioLiquido = salarioBruto - descontoINSS - descontoIR
console.log(`O salário líquido desse funcionário é de R$${salarioLiquido.toFixed(2)}`)