class Barreira {
  novoElemento(tagName, className) {
    let elemento = document.createElement(tagName)
    elemento.className = className

    return elemento
  }
  sortearAbertura(corpo, altura, abertura) {
    let alturaAtual = Math.floor(Math.random() * (altura - abertura) + abertura)
    corpo.style.height = `${alturaAtual}px`
  }
}

class Animar {
  constructor(p) {
    this.p = p
  }
  getX() {
    return this.p.style.left.split('px')[0]
  }
  setX(x = 1200) {
    this.p.style.left = `${x}px`
  }
}

function barreiras() {
 
  let barreira = new Barreira()
  let borda = barreira.novoElemento('div', 'borda')
  let corpo = barreira.novoElemento('div', 'corpo')
  let posicao = document.getElementById('barreira')

  posicao.appendChild(borda)
  posicao.appendChild(corpo)

  barreira.sortearAbertura(corpo, 200, 400)
  barreira.sortearAbertura(corpo, 200, 400)
  animars(posicao)

}
barreiras()

function animars(p) {

  let animar = new Animar(p)
  let deslocamento = 3
  animar.setX(1200)

  setInterval(() => {
    let get = animar.getX() - deslocamento
    animar.setX(get)
    if (animar.getX() < -200) {
      animar.setX(1200)
      
    }

  }, 5);

  

}