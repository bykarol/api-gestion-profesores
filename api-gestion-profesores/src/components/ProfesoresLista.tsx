import ProfesorCard from "./ProfesorCard"
import { Profesor } from "../types"


interface Props {
  profesores: Array<Profesor>
  setShowList: React.Dispatch<React.SetStateAction<boolean>>
  setProfesorID: React.Dispatch<React.SetStateAction<number>>
}
const ProfesoresLista = ({ profesores, setShowList, setProfesorID }: Props) => {


  return (
    <>
      <h2>Listado de Profesores</h2>
      <ul className="profesores-lista">
        {profesores?.map((profesor: Profesor) => {
          return (
            <li key={profesor.id}>
              <ProfesorCard profesor={profesor} setShowList={setShowList} setProfesorID={setProfesorID} />
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default ProfesoresLista