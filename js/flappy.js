/* Função que cria novo elemento recebendo o nome da tag e o estlo que quer passar à tag */
function novoElemento(tagName, className){
    const elem = document.createElement(tagName) 
    elem.className = className
    return elem
}

function Barreira(reverso = false){
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reverso ? corpo : borda)
    this.elemento.appendChild(reverso ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function parDeBarreiras(altura, abertura, x){
    // cria uma div para o par de barreiras
    this.elemento = novoElemento('div', 'par-barreiras')

    // cria objeto barreira superior
    this.superior = new Barreira(true)
    // cria objeto barreira inferior 
    this.inferior = new Barreira(false)

    // faz o appendChild das duas barreiras
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    // cria função pra sortear a abertura
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura-abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)

}

const b = new parDeBarreiras(600,200,400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)

/* const barreira_teste = new Barreira(true)
barreira_teste.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(barreira_teste.elemento) */

