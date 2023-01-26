class Chao {
  constructor() {

  }

  novoElemento(tagName, id) {
    const elemento = document.createElement(tagName)
    elemento.id = id

    return elemento
  }

  animar(tamanho, movimento) {
   tamanho.style.left = movimento
  }
}

let chao = new Chao()

function chaoAtual() {

  let criador = chao.novoElemento('div', 'chao')
  const corpo = document.getElementById('corpo')

  corpo.appendChild(criador)

  chao.animar(document.getElementById('chao'), '-200px')

}

chaoAtual()
