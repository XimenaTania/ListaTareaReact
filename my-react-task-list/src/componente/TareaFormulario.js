import React from "react";
import '../hojasDeStylo/tareaFormulario.css'


function TareaFormulario() {
    return ( <
        form className = "TareaFormulario" >
        <
        input className = "tareaInput"
        type = "texto"
        placeholder = "Eacribe tu tarea"
        name = "texto" / >
        <
        button className = "TareaBoton" >
        Agregar Tarea <
        /button>

        <
        /form>
    )

}
export default TareaFormulario;