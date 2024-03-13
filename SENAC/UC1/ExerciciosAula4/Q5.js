let horas = 50; let E = 0;
if(horas > 44){
  E = horas - 44; 
  horas = 44;
}
console.log(`O salário total é ${horas*35} e o salário excedente é ${E*50}`)