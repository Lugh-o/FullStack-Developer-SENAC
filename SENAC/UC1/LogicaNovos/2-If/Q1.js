let name = "Lucas"
let gender = "homem"
let price = 100

let discount = gender === "homem" ? 0.95 : 0.87

console.log(`${name} deverá pagar R$${(price*discount).toFixed(2)} pelo produto`);