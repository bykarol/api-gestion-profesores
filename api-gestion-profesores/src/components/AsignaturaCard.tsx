import { Asignatura, Profesor } from "../types";

interface Props {
  asignatura: Asignatura
  profesor?: Profesor
  profesores?: Array<Profesor>
  setProfesores?: React.Dispatch<React.SetStateAction<Profesor[]>>
}

const AsignaturaCard = ({ asignatura, profesor, profesores, setProfesores }: Props) => {
  const eliminarAsignatura = () => {
    if (setProfesores && profesor) {
      // Filtrar las asignaturas del profesor y crear un nuevo array sin la asignatura a eliminar
      const nuevasAsignaturas = profesor.asignaturas.filter(asig => asig.nombre !== asignatura.nombre);

      // Copia del profesor con las asignaturas actualizadas
      const nuevoProfesor = { ...profesor, asignaturas: nuevasAsignaturas };

      // Actualizar la lista de profesores con el nuevo profesor
      const nuevosProfesores = profesores?.map(p => (p.id === nuevoProfesor.id ? nuevoProfesor : p));

      // Actualizar el estado de los profesores
      setProfesores(nuevosProfesores || []);
    }
  };
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
        <span className="btn btn-eliminar p-1" style={{ color: "red" }} onClick={eliminarAsignatura}>Eliminar</span>
      </td >
    </>
  );
};

export default AsignaturaCard;
