async function gerarBaralho(){
    const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    const baralho = await fetch(url)
    console.info(baralho)
    return await baralho.json()
}

async function gerarCarta(id){
    const url = `https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=1`
    const resposta = await fetch(url)
    console.info(resposta)
    return await resposta.json()
}

async function tirarCarta(){
    const baralho = await gerarBaralho()
    const carta = await gerarCarta(baralho.deck_id)
    console.info(carta)
    return carta
}

async function mostrarCarta(){
    let img = document.getElementById('carta')
    let nome = document.getElementById('cartaNome')
    let nipe = document.getElementById('cartaNipe')
    const carta = await tirarCarta()
    const cartaEscolhida = carta.cards[0]
    console.info(cartaEscolhida)

    img.src = cartaEscolhida.image
    nome.innerHTML = `${cartaEscolhida.value}`
    nipe.innerHTML = `${cartaEscolhida.suit}`
}

mostrarCarta()