let placeHolder = document.querySelector('.generator')
let btn_generator = document.querySelector('.btn-generator')
let placeHOldersAll = document.querySelector('.containerAll')
let mensajeOculto = document.querySelector('.mensajeOculto')
let ocultateHistory = document.querySelector('.ocultateHistory')
let resetAll = document.querySelector('.resetAll')
let array = []
let char = 'qwerSDFGrtyuGHJKvbnASDBNMGKDFLSADFmXCVBsdfgUIOjklñ'
let num = '123456789'
let all = '123456789qwerSDFGrtyuGHJKvbnASDBNMGKDFLSADFmXCVBsdfgUIOjklñ/*-+@_?#%&'
let characters
let loader = document.querySelector('.loader')


btn_generator.addEventListener('click',selectTheChar)
ocultateHistory.addEventListener('click',toggleHystory)
resetAll.addEventListener('click',deleteall)

function toggleHystory(){
    placeHOldersAll.classList.toggle('inactive')
}
function deleteall(){
    location.reload()
}

function selectTheChar(){
    mensajeOculto.classList.add('inactive')

    if(document.querySelector('#_8').checked){
        length = 8
    }else if(document.querySelector('#_16').checked){
        length = 16
    }else if(document.querySelector('#_32').checked){
        length = 32
    }

    if(document.querySelector('#numeros').checked){
        characters = num
    }else if(document.querySelector('#letras').checked){
        characters = char
    }else if(document.querySelector('#ambos').checked){
        characters = char + num
    }else if(document.querySelector('#super').checked){
        characters = all
    }

    makeid(length, characters)

    loader.classList.remove('inactive')
}


function makeid(length, characters) {
    placeHolder.innerHTML = ``
    setTimeout(()=>{
        loader.classList.add('inactive')

        placeHolder.classList.remove('blur')
        let result           = '';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        placeHolder.innerHTML = `${result}`
  

    setTimeout(() => {
        placeHolder.classList.add('blur')
        mensajeOculto.classList.remove('inactive')

    }, 1500);

    if(array.length <= 4){
        placeHOldersAll.innerHTML = ``
        array.push(result)
        array.map(arr=>{
            placeHOldersAll.innerHTML += `<p>${arr}</p> `
        })
        return
    }else{
        array.shift()
        console.log(array)
        placeHOldersAll.innerHTML = ``
        array.map(arr=>{
            placeHOldersAll.innerHTML += `<p>${arr}</p> `
        })
    }
    array.push(result)
    placeHOldersAll.innerHTML += `<p>${result}</p> \n`
},1500)

    
    
}

document.addEventListener("DOMContentLoaded", function(event) {

    /* Auto-copy */
    var elementsCanCopy = document.getElementsByClassName("autoCopy");
    for (var i = 0; i < elementsCanCopy.length; i++) {
        elementsCanCopy[i].onclick = function() {
            document.execCommand("copy");
        }
        elementsCanCopy[i].addEventListener("copy", function(event) {
            event.preventDefault();
            if (event.clipboardData) {
                event.clipboardData.setData("text/plain", this.textContent);
            }
        })
    }

});