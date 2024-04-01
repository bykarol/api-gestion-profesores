import AsignaturaCard from "./AsignaturaCard";
import { Asignatura } from "../types";

interface Props {
  asignaturas: Asignatura[]
}

const AsignaturasLista = ({ asignaturas }: Props) => {
  return (
    <table className="table table-bordered" id="tabla-asignatura">
      <thead>
        <tr className="table-active">
          <th scope="col">Nombre</th>
          <th scope="col">Tipo</th>
          <th scope="col">Curso</th>
          <th scope="col">Grupo</th>
          <th scope="col">Horas semana</th>
          <th scope="col">Espacio Regular</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {asignaturas?.map((asignatura) => {
          return (
            <tr key={asignatura.nombre}>
              <AsignaturaCard asignatura={asignatura} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AsignaturasLista;
