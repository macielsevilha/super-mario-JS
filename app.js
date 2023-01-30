class Barreira {
  constructor(id = document.getElementById('barreira')) {
    this.id = id
  }
  novoElemento(tagName, className) {
    const elemento = document.createElement(tagName)
    elemento.className = className

    return elemento
  }
  sortearAbertura(corpo, abertura, altura) {
    let numero = (Math.random() * (altura - abertura) + abertura)
    corpo.style.height = `${numero}px`

  }
  getX() {
    return this.id.style.left.split('px')[0]
  }
  setX(posicao) {
    this.id.style.left = `${posicao}px`
  }
}
class Personagem {
  constructor(pular, className) {
    this.pular = pular
    this.className = className
  }
  getX() {
    let get = this.className.style.top.split('px')[0]
    return get
  }
  setX(valor) {
    let set = this.className.style.top = `${valor}px`
    
  }
}

function barreiras() {
  let barreira = new Barreira()

  let borda = barreira.novoElemento('div', 'borda')
  let corpo = barreira.novoElemento('div', 'corpo')
  let posicao = document.getElementById('barreira')

  let abertura = 200
  let altura = 300

  posicao.appendChild(borda)
  posicao.appendChild(corpo)

  barreira.sortearAbertura(corpo, abertura, altura)
  barreira.setX(1200)

  const DESLOCAMENTO = 3

  setInterval(() => {
    barreira.setX(barreira.getX() - DESLOCAMENTO)

    if (barreira.getX() < - 200) {
      barreira.setX(1200)
      barreira.sortearAbertura(corpo, abertura, altura)

    }
  }, 20);
}

barreiras()

function personagens(alturaJogo) {
  
  let pular = false 

  window.onkeydown = () => pular = true
  window.onkeyup = () => pular = false

  let className = document.getElementsByClassName('personagem')[0]
  let personagem = new Personagem(pular, className)
  let x = personagem.setX(335)

  setInterval(() => {

     let x = personagem.getX() - 3

     if(pular == true) {
      personagem.setX(x)
     } else if (pular == false) {
       if(x <= 340) {
         personagem.setX(335)
       }
     }

     console.log(x)
   
  }, 10);

  console.log(personagem.getX())
}

personagens()
