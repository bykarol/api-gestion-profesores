import { Profesor } from "../types";

interface Props {
  profesor: Profesor
  setShowList?: React.Dispatch<React.SetStateAction<boolean>>
  setProfesorID?: React.Dispatch<React.SetStateAction<number>>
}

const ProfesorCard = ({ profesor, setShowList, setProfesorID }: Props) => {
  return (
    <div className="container flex row align-items-center">
      <div className="col flex align-items-center" id="box-prof-name">{profesor.nombre.charAt(0)}{profesor.apellido.charAt(0)}</div>
      <div className="col-9 flex">
        <div><strong>{profesor.nombre} {profesor.apellido}</strong></div>
        <a href={`mailto:${profesor.correo}`} target="_blank" title="Enviar correo">{profesor.correo}</a>
        <div>{profesor.telefono}</div>
      </div>
      <div className="col">
        <span className="btn text-primary" onClick={() => {
          if (setShowList && setProfesorID) {
            setShowList(false)
            setProfesorID(profesor.id)
          }
        }}>Editar</span>
      </div>
    </div >
  );
};

export default ProfesorCard;
