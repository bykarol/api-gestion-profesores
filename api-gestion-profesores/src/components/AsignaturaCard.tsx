interface Asignatura {
  nombre: string
  tipo: string
  curso: string
  grupo: string
  horasSemanales: number
}

interface Props {
  asignatura: Asignatura;
}

const AsignaturaCard = ({ asignatura }: Props) => {
  return (
    <article className="asignatura-card">
      <span>{asignatura.nombre}</span>
      <span>{asignatura.tipo}</span>
      <span>{asignatura.curso}</span>
      <span>{asignatura.grupo}</span>
      <span>{asignatura.horasSemanales}</span>
      <span>{asignatura.curso} {asignatura.grupo}</span>
      <button>Ver</button>
      <button>Editar</button>
      <button>Eliminar</button>
    </article>
  );
};

export default AsignaturaCard;
