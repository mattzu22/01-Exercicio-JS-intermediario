
const sliders = document.getElementsByClassName('slider')
let sliderAberto = document.querySelector('.aberto')
let contador = 0
const setaDireita = document.getElementById('direita')
const setaEsquerda = document.getElementById('esquerda')


setaDireita.addEventListener('click', () => {
    
    contador++
   
    const sliderAtual = sliders[contador]
    
    sliderAberto.classList.remove('aberto')
    sliderAberto = sliderAtual

    sliderAtual.classList.add('aberto')

    condicoesDasSetas()

})

setaEsquerda.addEventListener('click', () => {

    contador--
  
    const sliderAtual = sliders[contador]

    sliderAberto.classList.remove('aberto')
    sliderAberto = sliderAtual

    sliderAtual.classList.add('aberto')

    condicoesDasSetas()

})


function condicoesDasSetas(){
    if(contador <= 0){
        setaEsquerda.classList.add('desabilitar-seta')
    }else{
        setaEsquerda.classList.remove('desabilitar-seta')
    }
    if(contador >= 3){
        setaDireita.classList.add('desabilitar-seta')
    }else{
        setaDireita.classList.remove('desabilitar-seta')
    }
}


    



//ideia
// document.querySelectorAll(".seta").forEach(seta => {

//     seta.addEventListener('click', () => {
        
        
//         const setaDireita = document.getElementById('direita')
//         const setaEsquerda = document.getElementById('esquerda')
        
//         if(contador <= 0){
//             setaEsquerda.classList.add('desabilitar-seta')
//         }else{
//             setaEsquerda.classList.remove('desabilitar-seta')
//             contador--
//         }

//         contador++
//         if(contador >= 3){
//             setaDireita.classList.add('desabilitar-seta')
//         }else{
//             setaDireita.classList.remove('desabilitar-seta')
//         }

    
//         const sliderAtual = sliders[contador]
        
//         sliderAberto.classList.remove('aberto')
//         sliderAberto = sliderAtual
    
//         sliderAtual.classList.add('aberto')
//     })
// })