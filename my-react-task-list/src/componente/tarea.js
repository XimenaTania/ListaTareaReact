import React from "react";
import '../hojasDeStylo/Tarea.css'
import { AiOutlineCarryOut } from "react-icons/ai";

function Tarea({ texto }) {
    return ( <
        div className = "tareaContenedor" >
        <
        div className = "tareaTexto" > { texto } <
        /div> <
        div className = "tareaContenedorIcono" >
        <
        AiOutlineCarryOut className = "tareaIcono" / >
        <
        /div> <
        /div>
    )
}
export default Tarea;