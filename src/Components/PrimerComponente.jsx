// rfc
import React, {useState} from 'react'
import './PrimerComponente.css'


export default function PrimerComponente() {

  // let nombre = "Alumno"
  let email = "alumno@alumno.com"

  const dias_semana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ]

  const [nombre, setNombre] = useState('')

  const [updated, setUpdated] = useState()

  function nombreOnChange(event) {
     return setNombre(event.target.value)
  }

  function buttonOnClick(){
     setUpdated(nombre)
  }

    return (
    <div>
        <h1>Esta es la llamada al primer componente</h1>
        
        <ul>
            {
                /*
                    Recorremos el array dias_semana para mostrar todos los días en la etiqueta ul
                */
                dias_semana.map((value, index) => {
                    return (<li key={index}>{value}</li>)
                })

                /*
                dias_semana.forEach( (item, index) => {
                    console.log("item: "+ {item} + "; index: "+index)
                    return (<li>{item}</li>)
                })
                */

            }
        </ul>
        <p>Mi nombre en tiempo real es: <strong className={name.length < 4 ? 'verde' : 'rojo'}> {nombre}</strong> </p>
        <p>El nombre aplicado es: <strong>{updated}</strong></p>
        <p>Mi correo es: <strong>{email}</strong></p>

        <input type="text" value={nombre} onChange={nombreOnChange}></input>
        <button onClick={buttonOnClick}>Actualizar nombre</button>
    </div>
  )
}
