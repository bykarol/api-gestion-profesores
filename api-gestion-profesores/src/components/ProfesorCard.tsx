import { Profesor } from "../types";

interface Props {
  profesor: Profesor
  setShowList?: React.Dispatch<React.SetStateAction<boolean>>
  setProfesorID?: React.Dispatch<React.SetStateAction<number>>
}

const ProfesorCard = ({ profesor, setShowList, setProfesorID }: Props) => {
  return (
    <article className="profesor-card">
      <span>{profesor.nombre} {profesor.apellido}</span>
      <span>{profesor.telefono}</span>
      <span>{profesor.correo}</span>
      <span><button onClick={() => {
        if (setShowList && setProfesorID) {
          setShowList(false)
          setProfesorID(profesor.id)
        }
      }}>Editar</button></span>
    </article >
  );
};

export default ProfesorCard;
