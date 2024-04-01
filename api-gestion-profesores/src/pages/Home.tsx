import { useEffect, useState } from 'react'
import ProfesoresLista from '../components/ProfesoresLista';

function HomePage() {
  const INITIAL_STATE = {
    "profesores": [
      {
        "id": 1,
        "nombre": "Juan",
        "apellido": "Pérez",
        "telefono": "123456789",
        "correo": "juan.perez@example.com",
        "asignaturas": [
          {
            "nombre": "Matemáticas",
            "tipo": "obligatoria",
            "curso": "1º Bachillerato",
            "grupo": "A",
            "horas_semanales": 5
          },
          {
            "nombre": "Física",
            "tipo": "optativa",
            "curso": "1º Bachillerato",
            "grupo": "B",
            "horas_semanales": 3
          }
        ]
      },
      {
        "id": 2,
        "nombre": "María",
        "apellido": "García",
        "telefono": "987654321",
        "correo": "maria.garcia@example.com",
        "asignaturas": [
          {
            "nombre": "Química",
            "tipo": "obligatoria",
            "curso": "4º ESO",
            "grupo": "C",
            "horas_semanales": 4
          },
          {
            "nombre": "Biología",
            "tipo": "optativa",
            "curso": "4º ESO",
            "grupo": "A",
            "horas_semanales": 2
          }
        ]
      }
    ]
  };

  interface Profesor {
    id: number
    nombre: string
    apellido: string
    telefono: string
    correo: string
    asignaturas: Array<Asignatura>
  }

  interface Asignatura {
    nombre: string
    tipo: string
    curso: string
    grupo: string
    horas_semanales: number
  }

  const [profesores, setProfesores] = useState<Array<Profesor>>([])

  useEffect(() => {
    setProfesores(INITIAL_STATE.profesores)
  }, [])


  return (
    <div className='App'>
      <h1>Profesores</h1>
      <h3>Crea y gestiona los profesores</h3>
      <ProfesoresLista profesores={profesores} />
    </div>
  )
}

export default HomePage
