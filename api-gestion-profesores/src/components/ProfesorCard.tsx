import { Link } from "react-router-dom"

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
  profesor: Profesor
}

const ProfesorCard = ({ profesor }: Props) => {
  return (
    <article className="profesor-card">
      <span>{profesor.nombre} {profesor.apellido}</span>
      <span>{profesor.telefono}</span>
      <span>{profesor.correo}</span>
      <span> <Link
        to={`/profesor/${profesor.id}`}
        state={{ profesor }} // Pasar el profesor como estado
      ><button>Editar</button></Link></span>
    </article >
  );
};

export default ProfesorCard;
