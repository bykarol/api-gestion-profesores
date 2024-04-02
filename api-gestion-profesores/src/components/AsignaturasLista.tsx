import { Asignatura, Profesor } from "../types";
import AsignaturaCard from "./AsignaturaCard";

interface Props {
  asignaturas: Asignatura[];
  profesor?: Profesor
  profesores?: Array<Profesor>
  setProfesores?: React.Dispatch<React.SetStateAction<Profesor[]>>
}

const AsignaturasLista = ({ asignaturas, profesor, profesores, setProfesores }: Props) => {
  return (
    <table className="table table-bordered" id="tabla-asignatura">
      <thead>
        <tr className="table-active">
          <th scope="col">Nombre</th>
          <th scope="col">Tipo</th>
          <th scope="col">Curso</th>
          <th scope="col">Horas semana</th>
          <th scope="col">Grupo</th>
          <th scope="col">Espacio Regular</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {asignaturas?.map((asignatura) => {
          return (
            <tr key={asignatura.nombre}>
              <AsignaturaCard asignatura={asignatura} profesor={profesor} profesores={profesores} setProfesores={setProfesores} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AsignaturasLista;
