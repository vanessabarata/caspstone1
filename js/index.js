function createNewCard (objeto) {

    let ul = document.createElement("ul")
    ul.classList.add("container")

    for (let i = 0; i < data.length; i++) {
        let card = data[i]

        let itemCard = document.createElement("li")
        itemCard.classList.add("card")

        let imgCard = document.createElement("img")
        imgCard.classList.add("imagem")
        imgCard.src = card.img

        let categoriaCard = document.createElement("p")
        categoriaCard.innerText = card.tag
        categoriaCard.classList.add("categoria")

        let nomeCard = document.createElement("p")
        nomeCard.innerText = card.nameItem
        nomeCard.classList.add("nome")

        let descricaoCard = document.createElement("p")
        descricaoCard.innerText = card.description
        descricaoCard.classList.add("descricao")

        let valorCard = document.createElement("p")
        valorCard.innerText = card.value
        valorCard.classList.add("valor")

        let carrinhoCard = document.createElement("button")
        carrinhoCard.innerText = card.addCart
        carrinhoCard.classList.add("carrinho")

        itemCard.append(imgCard,categoriaCard,nomeCard,descricaoCard,valorCard,carrinhoCard)

        ul.append(itemCard)

    }
    return ul
}

function render (lista, secao) {
    let section = document.querySelector(`.${secao}`)
    section.append(lista)
}
render(createNewCard(data),"section")