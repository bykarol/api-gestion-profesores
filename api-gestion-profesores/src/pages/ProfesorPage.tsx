import { useLocation } from "react-router-dom";
import ProfesorCard from "../components/ProfesorCard";
import AsignaturasLista from "../components/AsignaturasLista";

function ProfesorPage() {
  // Obtener la ubicación actual
  const location = useLocation();

  // Extraer el estado del profesor de la ubicación
  const { state } = location;
  const profesor = state ? state.profesor : null;

  return (
    <div className='profesor-page'>
      <h2>Profesor page detail</h2>
      {/* Pasar el profesor como prop al ProfesorCard */}
      {profesor && <article>
        <ProfesorCard profesor={profesor} />
        <AsignaturasLista asignaturas={profesor.asignaturas} />
      </article>}
    </div>
  );
}

export default ProfesorPage;
