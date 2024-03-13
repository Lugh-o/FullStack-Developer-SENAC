let pessoa = {
    altura: 1.75, 
    peso: 65,
    calcIMC: function(){
        console.log(+(this.peso/(this.altura)**2).toFixed(2))
    }

}

pessoa.calcIMC()