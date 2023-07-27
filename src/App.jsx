import { useState } from "react"
import SearchBar from "./components/SearchBar"

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: solid 1px #ccc;
  background-color: white;
  cursor: pointer;

  &:hover{
    background-color: #efefef 
  }
`

import styled from 'styled-components'

const people = [
  {
    id: 'people-01',
    title: 'Pepito Perez'
  },
  {
    id: 'people-02',
    title: 'Daniel Osorio'
  },
  {
    id: 'people-03',
    title: 'Sergio Martinez'
  },
  {
    id: 'people-04',
    title: 'Juan pablo'
  },
  {
    id: 'people-05',
    title: 'Isabella Rivera'
  }

]

const calendar = [
  {
    id: 'calendar-01',
    title: 'Sesion de estudios'
  },
  {
    id: 'calendar-02',
    title: 'Comprar mercado'
  },
  {
    id: 'calendar-03',
    title: 'Sesion de ejercicio'
  },
  {
    id: 'calendar-04',
    title: 'Partido semanal de futbol'
  },
  {
    id: 'calendar-05',
    title: 'Comprar de objetos necesitados'
  },
]

const email = [
  {
    id: 'email-01',
    title: 'Reporte de estudios'
  },
  {
    id: 'email-02',
    title: 'Proximos eventos'
  },
  {
    id: 'email-03',
    title: 'Requisitos para cambio'
  },
  {
    id: 'email-04',
    title: 'Solicitud de examenes'
  },
  {
    id: 'email-05',
    title: 'Estatus de funcionalidad'
  },
]

function App() {

  const [data, setData] = useState([...people, ...calendar, ...email])

  const [selection, setSelection] = useState(null)

  function handleClick(e) {
    const op = e.target.name;

    switch (op) {
      case 'all':
        setData([...people, ...calendar, ...email]);

        break;
      case 'people':
        setData([...people]);

        break;
      case 'calendar':
        setData([...calendar]);

        break;
      case 'emails':
        setData([...email]);

        break;
    }
  }

  function handleItemSelected(item){
    setSelection(item);
  }

  return (
    <div>
      <Button onClick={handleClick} name="all">All</Button>
      <Button onClick={handleClick} name="people">People</Button>
      <Button onClick={handleClick} name="calendar">Calendar</Button>
      <Button onClick={handleClick} name="emails">Emails</Button>
      {selection ? <div>Haz seleccionado: {selection.title}</div> : ''}
      <SearchBar items={data} onItemSelected={handleItemSelected}/>
    </div>

  )
}

export default App
