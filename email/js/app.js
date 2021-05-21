// Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');




// Event Listeners

eventListeners();

function eventListeners(){
    // Inicio de la app y desabilidar boton
    document.addEventListener('DOMContentLoaded', inicioApp);

    // Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // Boton de enviar 
    formularioEnviar.addEventListener('submit', enviarEmail);

    // Boton de reset
    btnReset.addEventListener('click', resetFormulario);
}

//Funciones

function inicioApp(){
    // desabilitar el envío 

    btnEnviar.disabled = true;
}

// Validad que el campo tenga datos
function validarCampo(){

    // Se valida la longitud del texto y que no este vacio
    validarLongitud(this);
    // validar solo el email
    if(this.type == 'email'){
        validarEmail(this);
    }
    
        let errores = document.querySelectorAll('.error');
        if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
            // Comprueba que no haya errores en el formulario 
            if(errores.length == 0){
                // Habilita el boton enviar una vez que los campos esten completos
                btnEnviar.disabled = false;
            }
            
        }
    
}


// Resetear el form
function resetFormulario(e){
    formularioEnviar.reset();
    btnEnviar.disabled = true;
    e.preventDefault();
}

// Enviar el correo
function enviarEmail(e){
    // Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    

    // Gif que envía email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    // Ocultar spinner y mostrar gif de enviado
    setTimeout(function(){
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
            btnEnviar.disabled = true;
        },5000);
    },3000);

    
    e.preventDefault();

}


// Verifica la longitud del texto en los campos
function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const mensaje = campo.value;

    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

 
