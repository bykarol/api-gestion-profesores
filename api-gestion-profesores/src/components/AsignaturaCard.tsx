import { Asignatura } from "../types";

interface Props {
  asignatura: Asignatura;
}

const AsignaturaCard = ({ asignatura }: Props) => {
  return (
    <>
      <td>{asignatura.nombre}</td>
      <td>{asignatura.tipo}</td>
      <td>{asignatura.curso}</td>
      <td>{asignatura.horasSemanales}</td>
      <td>{asignatura.grupo}</td>
      <td>{asignatura.curso} {asignatura.grupo}</td>
      <td>
        <span className="btn text-primary p-1">Ver</span>
        <span className="btn text-primary p-1">Editar</span>
        <span className="btn btn-eliminar p-1" style={{ color: "red" }}>Eliminar</span>
      </td >
    </>
  );
};

export default AsignaturaCard;
