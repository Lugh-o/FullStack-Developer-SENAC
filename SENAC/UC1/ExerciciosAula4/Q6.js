let data = ["Lucas Falcão", 3000, 90, 400] // [nome, saldo, debido, credito]
let saldoAtual = data[1] - data[2] + data[3]
let isPos = saldoAtual > 0 ? "positivo":"negativo"
console.log(saldoAtual, isPos)