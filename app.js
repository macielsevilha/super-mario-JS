class Barreira {
  constructor(altura) {
    this.altura = altura
  }
  criarElemento(tagName, className) {
    let elemento = document.createElement(tagName)
    elemento.className = className

    return elemento

  }
  getAltura() {
    let corpo = document.getElementsByClassName('corpo')[0]
    return corpo 
    
  }
  setAltura(x) {
    this.getAltura().style.height = `${x}px`
  }
}

let barreira = new Barreira(200)
function barreiras(altura, abertura) {

  let borda = barreira.criarElemento('div', 'borda')
  let corpo = barreira.criarElemento('div', 'corpo')
  
  let elemento = document.getElementById('barreira')
 
  elemento.appendChild(borda)
  elemento.appendChild(corpo)

  let sortearAltura = Math.random() * (altura - abertura + 1) + abertura
 
  barreira.setAltura(sortearAltura)
 
}

barreiras(300, 150) 