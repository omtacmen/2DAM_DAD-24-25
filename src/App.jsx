import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimerComponente from './Components/PrimerComponente'
import SegundoComponente from './Components/SegundoComponente'
import ComponentePasoDatosPadreAHijo_Padre from './Components/ComponentePasoDatosPadreAHijo_Padre'

function App() {
  const [count, setCount] = useState(0)

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
      <PrimerComponente/>
      <hr></hr>
      <SegundoComponente/>
      <hr></hr>

      <h1>__Paso de parametros entre Padre a Hijo__</h1>
      <ComponentePasoDatosPadreAHijo_Padre/>
      <hr></hr>
      
    </>
  )
}

export default App
