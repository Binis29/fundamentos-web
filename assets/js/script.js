/* por tag: getElementByTagName()
   por Id : getElementById()
   por Nome : getElementsByName()
   por Classe : getElementsByClassName()
   por Selector: querySelector() */

   let nome = window.document.getElementById('nome')
   let email = document.querySelector('#email')
   let assunto = document.querySelector('#assunto')
   let mensagem = document.querySelector('#mensagem')

   nome.style.width = '100%'
   email.style.width = '100%'
   assunto.style.width = '100%'
   mensagem.style.width = '100%'

   function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3 ){
        txt.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.value.color = 'green'
    }
 
    }

    function validaEmail(){
        let txtEmail = document.querySelector('#txtEmail')
        if (email.value.inde){
            txt.innerHTML = 'Nome inválido'
        } else {
            txtNome.innerHTML = 'Nome válido'
        }
     
        }