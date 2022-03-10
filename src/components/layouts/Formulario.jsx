import React from "react";
import emailjs from '@emailjs/browser';

const Formulario = () =>{

    const sendEmail = (event) => {

        event.preventDefault()

        emailjs.sendForm('service_1oe6gzx','template_gqfe87c',event.target,'eJY5fZR80IyctiwCE').then(response => console.log(response)).catch(error => console.log(error))

    }

    return(

        <form className="formulario" onSubmit={sendEmail}>
            
            <div className="campoNombre">
                <label>Nombre</label>
                <input type="text" name="nombre"/>
            </div>

            <div className="campoCorreo">
                <label>Correo</label>
                <input type="email" name="correo"/>
            </div> 

            <div className="campoMensaje">
                <label>Mensaje</label>
                <textarea rows="5" columns="10" name="mensaje"></textarea>
            </div>

            <button>Enviar</button>
        </form>

    )   

}

export default Formulario