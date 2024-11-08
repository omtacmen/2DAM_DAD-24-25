import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimerComponente from './Components/PrimerComponente'
import SegundoComponente from './Components/SegundoComponente'
import ComponentePasoDatosPadreAHijo_Padre from './Components/ComponentePasoDatosPadreAHijo_Padre'
import ComponentePasoDatosHijoAPadre_Padre from './Components/ComponentePasoDatosHijoAPadre_Padre'
import ComponentePasoDatosHermano1 from './Components/ComponentePasoDatosHermano1'
import ComponentePasoDatosHermano2 from './Components/ComponentePasoDatosHermano2'

// Creamos el contexto para compartir datos entre hermanos
export const MensajeContexto = createContext();

function App() {
  const [count, setCount] = useState(0)

  const [mensaje, setMensaje] = useState('Mensaje inicial')

  // Creamos los estilos para cada componente. Sería más óptimo añadir las clases en App.css
  const divStyleComponente1 = {
    backgroundColor: "#ffcccc",
    width: "100%"
  };

  const divStyleComponente2 = {
    backgroundColor: "#add8e6",
    width: "100%"
  };

  const divStylePadreAhijo = {
    backgroundColor: "#FFDAB9",
    width: "100%"
  };

  const divStyleHijoApadre = {
    backgroundColor: "#90EE90",
    width: "100%"
  };

  const divStyleHermanos = {
    backgroundColor: "#E6E6FA",
    width: "100%"
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Ejemplo de pruebas de llamadas a componentes</h2>

      <hr></hr>
      <div style={divStyleComponente1}>
        <PrimerComponente/>
      </div>
      <hr></hr>
      <div style={divStyleComponente2}>
        <SegundoComponente/>
      </div>
      <hr></hr>

      <div style={divStylePadreAhijo}>
        <h2>__Paso de parametros entre Padre a Hijo__</h2>
        <ComponentePasoDatosPadreAHijo_Padre/>
      </div>

      <hr></hr>
      <div style={divStyleHijoApadre}>
        <h2>__Paso de parametros entre Hijo a Padre__</h2>
        <ComponentePasoDatosHijoAPadre_Padre/>
      </div>
      
      <hr></hr>

      <div style={divStyleHermanos}>
        <MensajeContexto.Provider value={{mensaje, setMensaje}}>

          <h2>__Paso de parámetros entre Componentes hermanos__</h2>
          <ComponentePasoDatosHermano1/>
          <ComponentePasoDatosHermano2/>

        </MensajeContexto.Provider>
      </div>

      <hr></hr>
      
    </>
  )
}

export default App
