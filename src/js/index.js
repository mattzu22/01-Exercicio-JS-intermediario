/*  primeiro capturar as setas no html 
    depois capturar os slider
    quando clicar na seta direita tirar a class aberto e colocar no próximo 
*/
// function moverParaEsquerda(){
//     contador--
//     if(contador <= sliders.length){
//         return stop;
//     }

//     let sliderAtual = sliders[contador]
//     sliderAberto.classList.remove('aberto')
//     sliderAtual.classList.add('aberto')

// }


// function moverParaDireita(){
//     contador++
//     if(contador >= sliders.length){
//         return;
//     }

//     let sliderAtual = sliders[contador]

//     sliderAberto.classList.remove('aberto')
//     sliderAtual.classList.add('aberto')
//     console.log(sliderAtual);
    
// }



const sliders = document.querySelectorAll('.slider')
const tamanhoSliders = sliders.length

const sliderAberto = document.querySelector('.aberto')
let contador = 0


document.getElementById('direita').addEventListener('click', () => {
    contador++
    if(contador >= tamanhoSliders){
        return;
    }
    console.log(contador)

    let sliderAtual = sliders[contador]

    sliderAberto.classList.remove('aberto')
    sliderAtual.classList.add('aberto')
})

document.getElementById('esquerda').addEventListener('click', () => {
    contador--
    if(tamanhoSliders <= contador){
        return;
    }
    console.log(contador)

    let sliderAtual = sliders[contador]

    sliderAberto.classList.remove('aberto')
    sliderAtual.classList.add('aberto')
})

    
    
