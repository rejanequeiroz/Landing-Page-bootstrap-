let email = document.querySelector('#email')
let erroEmail = document.querySelector('#erroEmail')

let assunto = document.querySelector('#assunto')
let erroAssunto = document.querySelector('#erroAssunto')

let emailOK = false
let assuntoOK = false

let mapa = document.querySelector('#mapa')

function validaEmail(){
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        erroEmail.innerHTML = 'Email Invalido'
    }else{
        erroEmail.innerHTML = ''
        emailOK = true
    }
}

function validaAssunto(){
    if(assunto.value.length > 50){
        erroAssunto.innerHTML = 'limite de caracteres excedido (o limite 50 caracteres) '
    }else{
        erroAssunto.innerHTML = ''
        assuntoOK = true
    }
}

function enviar(){
    if( emailOK && assuntoOK){
        alert('Email enviado com sucesso')
    }else{
        alert('preencha as informaçoes corretamente !')
    }
   
}

function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '400px'

}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}