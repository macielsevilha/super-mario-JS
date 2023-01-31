class CriarJogo {
  constructor() {

  }
  criarElemento(tagName, className) {
    let elemento = document.createElement(tagName)
    elemento.className = className

    return elemento
  }
}

let criarJogo = new CriarJogo()

function nuvens() {
    let elemento = document.getElementsByClassName('nuvens')[0]

    let nuvem_1 = criarJogo.criarElemento('div','nuvem-1')
    let nuvem_2 = criarJogo.criarElemento('div','nuvem-2')
    let nuvem_3 = criarJogo.criarElemento('div','nuvem-3')

    elemento.appendChild(nuvem_1)
    elemento.appendChild(nuvem_2)
    elemento.appendChild(nuvem_3)
}
nuvens()
function barreiras() {
    let elemento = document.getElementsByClassName('barreira')[0]

    let borda = criarJogo.criarElemento('div', 'borda')
    let corpo = criarJogo.criarElemento('div', 'corpo')

    elemento.appendChild(borda)
    elemento.appendChild(corpo)
}
barreiras()
function terraSuporte() {
    let elemento = document.getElementsByClassName('relva-chao')[0]

    let relva = criarJogo.criarElemento('div', 'relva')
    let terra = criarJogo.criarElemento('div', 'terra')

    elemento.appendChild(relva)
    elemento.appendChild(terra)
}
terraSuporte()
