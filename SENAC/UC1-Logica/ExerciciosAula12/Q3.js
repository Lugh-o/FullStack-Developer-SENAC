let carro = {
    marca: "Renault",
    modelo: "Kwid",
    ano: 2024,
    addColor: function(color){
        this.color = color
    },
    modifyModel: function(model){
        this.modelo = model
    },
    deleteYear: function(){
        delete this.ano
    }
}

carro.addColor("Red")
carro.modifyModel("Sandero")
carro.deleteYear()
console.log(carro)