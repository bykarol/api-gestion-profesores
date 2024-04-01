import AsignaturaCard from "./AsignaturaCard";
import { Asignatura } from "../types";

interface Props {
  asignaturas: Asignatura[]
}

const AsignaturasLista = ({ asignaturas }: Props) => {
  return (
    <ul className="asignaturas-lista">
      {asignaturas?.map((asignatura) => {
        return (
          <li key={asignatura.nombre}>
            <AsignaturaCard asignatura={asignatura} />
          </li>
        );
      })}
    </ul>
  );
};

export default AsignaturasLista;
