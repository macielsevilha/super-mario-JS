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
    if(valor <= -4200) {
      valor =  2200
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

class Personagem {
  constructor(elemento) {
    this.elemento = elemento
  }
  getX() {
   return this.elemento.style.top.split('px')[0]
  }
  setX(x) {
   this.elemento.style.top = `${x}px`
  } 
  cair(x) {
   this.elemento.style.top = `${x}px`;
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
  b_1.setX(PADRAO_LATERAL, 5)

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

function personagens() {
  let mario = document.getElementsByClassName('personagem')[0]

  let personagem = new Personagem(mario)
  
  let pular = false
  const DESLOCAMENTO = 3

  window.onkeydown = () => pular = true
  window.onkeyup = () => pular = false
  
  const jump = () => {
    personagem.setX(900)
    personagem.cair(900)
    setInterval(() => {
      let subir = personagem.getX() - DESLOCAMENTO
   
        personagem.setX(subir)
      
    }, 0);
    setInterval(() => {
      let cair = personagem.getX()
      cair++
      
      if(pular == false) {  
        // cair = Math.abs()
        if(cair < 900) {
          personagem.cair(cair)
        }
        
      }
    }, -1000);
  
    setTimeout(() => {
      
    }, 1000); 
  }
  
  document.addEventListener('keydown', jump);

  
}
personagens()
