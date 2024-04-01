import ProfesorCard from "./ProfesorCard"

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

interface Props {
  profesores: Array<Profesor>
}
const ProfesoresLista = ({ profesores }: Props) => {
  return (
    <>
      <h2>Listado de Profesores</h2>
      <ul className="profesores-lista">
        {profesores?.map((profesor) => {
          return (
            <li key={profesor.id}>
              <ProfesorCard profesor={profesor} />
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default ProfesoresLista