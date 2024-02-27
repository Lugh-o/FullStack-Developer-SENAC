let unitPrice = 10
let amount = 30
let totalPrice = amount*unitPrice

if(amount > 10){
    totalPrice *= 0.9
}

console.log(`O preço final é R$${totalPrice.toFixed(2)}`)