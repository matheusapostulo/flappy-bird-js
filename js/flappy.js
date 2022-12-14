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



/* const barreira_teste = new Barreira(true)
barreira_teste.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(barreira_teste.elemento) */

