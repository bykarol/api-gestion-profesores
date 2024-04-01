import { Profesor } from "../types";
import { useEffect, useState } from "react";
import ProfesoresLista from "../components/ProfesoresLista";
import AsignaturaForm from "../components/AsignaturaForm";
import AsignaturasLista from "../components/AsignaturasLista";
import ProfesorCard from "../components/ProfesorCard";
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
          "horasSemanales": 5,
          "espacio": "1º Bach - Grupo A"
        },
        {
          "nombre": "Física y Química",
          "tipo": "optativa",
          "curso": "1º Bachillerato",
          "grupo": "B",
          "horasSemanales": 3,
          "espacio": "1º Bach - Grupo B"
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
          "nombre": "Física y Química",
          "tipo": "obligatoria",
          "curso": "4º ESO",
          "grupo": "C",
          "horasSemanales": 4,
          "espacio": "4º ESO - Grupo C"
        },
        {
          "nombre": "Biología",
          "tipo": "optativa",
          "curso": "4º ESO",
          "grupo": "A",
          "horasSemanales": 2,
          "espacio": "4º ESO - Grupo A"
        }
      ]
    }
  ]
};

interface State {
  profesores: Array<Profesor>
  idNum: number
}


function ProfesorPage() {

  const [profesores, setProfesores] = useState<State["profesores"]>([])
  const [profesorID, setProfesorID] = useState<State["idNum"]>(0)

  useEffect(() => {
    setProfesores(INITIAL_STATE.profesores)
  }, [])
  const [showList, setShowList] = useState(true);

  return (
    <>
      {showList && <ProfesoresLista profesores={profesores} setShowList={setShowList} setProfesorID={setProfesorID} />}

      {!showList && profesorID &&
        <article>
          <ProfesorCard profesor={profesores[profesorID]} />
          <AsignaturasLista asignaturas={profesores[profesorID].asignaturas} />
          <AsignaturaForm profesor={profesores[profesorID]} profesores={profesores} nuevaAsignatura={setProfesores} />
        </article>

      }
    </>
  );
}

export default ProfesorPage;
