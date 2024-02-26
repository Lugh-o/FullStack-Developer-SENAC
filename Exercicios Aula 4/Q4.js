let fixo = 2000; let vendas = 2000;
let comissao = vendas <= 1500 ? vendas*0.03 : vendas*0.05;

console.log(`O salário total é ${fixo+comissao}`)