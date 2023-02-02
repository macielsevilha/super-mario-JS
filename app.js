class CriarJogo {
  criarElemento(tagName, className) {
    let elemento = document.createElement(tagName)
    elemento.className = className

    return elemento
  }
}
class AnimarItens {
  constructor(DESLOCAMENTO, elemento) {
    this.DESLOCAMENTO = DESLOCAMENTO
    this.elemento = elemento
  }

  getX() {
    let valor = this.elemento.style.left.split('px')[0]
    if (valor <= -4200) {
      valor = 2200
    }
    return valor
  }
  setX(X, VELOCIDADE = 10) {
    setInterval(() => {
      X = this.getX() - this.DESLOCAMENTO
      this.elemento.style.left = `${X}px`
    }, VELOCIDADE);
  }
}

let criarJogo = new CriarJogo()

function nuvens() {
  let elemento = document.getElementsByClassName('nuvens')[0]

  let nuvem_1 = criarJogo.criarElemento('div', 'nuvem-1')
  let nuvem_2 = criarJogo.criarElemento('div', 'nuvem-2')
  let nuvem_3 = criarJogo.criarElemento('div', 'nuvem-3')

  elemento.appendChild(nuvem_1)
  elemento.appendChild(nuvem_2)
  elemento.appendChild(nuvem_3)

  let n_1 = new AnimarItens(3, nuvem_1)
  let n_2 = new AnimarItens(3, nuvem_2)
  let n_3 = new AnimarItens(3, nuvem_3)

  const PADRAO_LATERAL = 2200

  n_1.setX(PADRAO_LATERAL, 30)
  n_2.setX(PADRAO_LATERAL, 20)
  n_3.setX(PADRAO_LATERAL, 40)

}
nuvens()
function barreiras() {
  let elemento = document.getElementsByClassName('barreira')[0]

  let borda = criarJogo.criarElemento('div', 'borda')
  let corpo = criarJogo.criarElemento('div', 'corpo')

  elemento.appendChild(borda)
  elemento.appendChild(corpo)

  let b_1 = new AnimarItens(3, elemento)

  const PADRAO_LATERAL = 0
  b_1.setX(PADRAO_LATERAL, 0)

}
barreiras()
function terraSuporte() {
  let elemento = document.getElementsByClassName('relva-chao')[0]

  let relva = criarJogo.criarElemento('div', 'relva')
  let terra_1 = criarJogo.criarElemento('div', 'terra')
  let terra_2 = criarJogo.criarElemento('div', 'terra')
  let terra_3 = criarJogo.criarElemento('div', 'terra')
  let terra_4 = criarJogo.criarElemento('div', 'terra')
  let terra_5 = criarJogo.criarElemento('div', 'terra')

  terra_2.style.left = '1300px'
  terra_3.style.left = '2500px'
  terra_4.style.left = '3800px'
  terra_5.style.left = '5000px'
 

  elemento.appendChild(relva)
  elemento.appendChild(terra_1)
  elemento.appendChild(terra_2)
  elemento.appendChild(terra_3)
  elemento.appendChild(terra_4)
  elemento.appendChild(terra_5)

  let r_1 = new AnimarItens(3, relva)
  let e_1 = new AnimarItens(3, terra_1)
  let e_2 = new AnimarItens(3, terra_2)
  let e_3 = new AnimarItens(3, terra_3)
  let e_4 = new AnimarItens(3, terra_4)
  let e_5 = new AnimarItens(3, terra_5)

  r_1.setX(0, 0)
  e_1.setX(0, 0)
  e_2.setX(0, 0)
  e_3.setX(0, 0)
  e_4.setX(0, 0)
  e_5.setX(0, 0)
}
terraSuporte()

function personagens() {
  const PERSONAGEM = document.getElementsByClassName('personagem')[0]
  let elemento = document.createElement('img')
  elemento.src = './images/mario.gif'

  let evento = () => {
    elemento.classList.add('cair')
    elemento.classList.replace('cair', 'subir') 
    setTimeout(() => {
      elemento.classList.replace('subir', 'cair')
    }, 1500);
  }

  PERSONAGEM.appendChild(elemento)
  window.addEventListener('keydown', evento)


}
personagens()
