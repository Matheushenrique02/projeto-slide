const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
const img4 = document.querySelector('#img4')
const img5 = document.querySelector('#img5')
const img6 = document.querySelector('#img6')
const proxima =document.querySelector('#proxima')
const anterior = document.querySelector('#anterior')

const imagens = [img1,img2,img3,img4,img5,img6]

proxima.addEventListener("click",prox)
anterior.addEventListener("click",ant)



let exibida = 0

function prox(){
    exibida++
    if(exibida >= imagens.length){
        exibida = 0
    }
    atualizar()
}

function ant(){
    exibida--
    if(exibida < 0){
        exibida = imagens.length -1
    }
    atualizar()
}

function atualizar(){
    imagens.forEach((img,index)=>{
        img.style.display = (index === exibida) ? 'block' : 'none'
    })
}