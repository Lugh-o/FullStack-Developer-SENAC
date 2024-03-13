function getItem(code){
    let cardapio = [
        doguinho = {
            spec: "Doguinho",
            price: 2.5,
        },
        dogao = {
            spec: "Dogão",
            price: 2.5,
        },
        paocomovo = {
            spec: "Pão com Ovo",
            price: 2.5,
        },
        hamburguer = {
            spec: "Hamburguer",
            price: 2.5,
        },
        cheeseburguer = {
            spec: "Cheeseburguer",
            price: 2.5,
        },
        refrigerante = {
            spec: "Refrigerante",
            price: 2.5,
        }
    ]

    return cardapio[code-100]
}

console.log(getItem(101))