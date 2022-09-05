import './App.css';
import lapara from './imagenes/lampara.png'
import TareaFormulario from './componente/TareaFormulario';



function App() {
    return ( <
        div className = "aplicacionTareas" >
        <
        div className = 'lampara-contenedor' >
        <
        img src = { lapara }
        className = 'lampara' /
        >
        <
        div className = 'tareaListaPrinciapal' >
        <
        h1 > Mis tareas < /h1> <
        TareaFormulario / >

        <
        /div> <
        /div> <
        /div>
    );
}

export default App;