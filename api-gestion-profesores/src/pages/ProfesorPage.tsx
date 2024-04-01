import { Profesor } from "../types";
import { useEffect, useState } from "react";
import ProfesoresLista from "../components/ProfesoresLista";
import AsignaturaForm from "../components/AsignaturaForm";
import AsignaturasLista from "../components/AsignaturasLista";
import ProfesorCard from "../components/ProfesorCard";
import BannerHoras from "../components/BannerHoras";
import BannerFrecuencia from "../components/BannerFrecuencia";
const INITIAL_STATE = {
  "profesores": [
    {
      "id": 1,
      "nombre": "Juan",
      "apellido": "Pérez",
      "telefono": "+34123456789",
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
      "telefono": "+34987654321",
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

      {showList && <ProfesoresLista profesores={profesores} showList={showList} setShowList={setShowList} setProfesorID={setProfesorID} />}

      {!showList && profesorID &&
        < article >
          <ProfesorCard profesor={profesores[profesorID - 1]} />
          <hr />
          <BannerFrecuencia />
          <BannerHoras asignaturas={profesores[profesorID - 1].asignaturas} />
          <div className="table-responsive rounded-top">
            <AsignaturasLista asignaturas={profesores[profesorID - 1].asignaturas} profesor={profesores[profesorID - 1]} profesores={profesores} setProfesores={setProfesores} />
          </div>
          <AsignaturaForm profesor={profesores[profesorID - 1]} profesores={profesores} nuevaAsignatura={setProfesores} />
        </article >
      }
    </>
  );
}

export default ProfesorPage;
