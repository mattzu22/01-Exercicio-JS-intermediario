
const sliders = document.getElementsByClassName('slider')
let sliderAberto = document.querySelector('.aberto')
let contador = 0
const setaAvancar = document.getElementById('avancar')
const setaVoltar = document.getElementById('voltar')
  

setaAvancar.addEventListener('click', () => {   
    contador++
   
    mostraOuEsconderSlider()
    mostrarOuDesativarSetas()
})

setaVoltar.addEventListener('click', () => {
    contador--
    //já que o codigo estava sendo repetido, seria melhor ter criado uma função
    mostraOuEsconderSlider()
    mostrarOuDesativarSetas()
})


function mostraOuEsconderSlider() {
    const sliderAtual = sliders[contador]

    sliderAberto.classList.remove('aberto')
    sliderAberto = sliderAtual

    sliderAtual.classList.add('aberto')
}

function mostrarOuDesativarSetas(){
    if(contador <= 0){
        setaVoltar.classList.add('desabilitar-seta')
    }else{
        setaVoltar.classList.remove('desabilitar-seta')
    }
    //nao usar numerps inteiros como o 3 nesse caso, pq caso seja adicionado outro slider não vai funcionar, pois o codigo não esta reutilizavel
    if(contador >= sliders.length -1){
        setaAvancar.classList.add('desabilitar-seta')
    }else{
        setaAvancar.classList.remove('desabilitar-seta')
    }
}


