import { useEffect, useState } from "react";
import { Asignatura } from "../types";
interface Props {
  asignaturas: Asignatura[]
}
const BannerHoras = ({ asignaturas }: Props) => {
  useEffect(() => {
    const horasTotales = asignaturas.reduce((totalHoras, asignatura) => {
      return totalHoras + asignatura.horasSemanales;
    }, 0);
    const horasLectivas = asignaturas.reduce((totalHoras, asignatura) => {
      if (asignatura.tipo === "obligatoria") {
        return totalHoras + asignatura.horasSemanales;
      } else {
        return totalHoras
      }
    }, 0);
    const horasComplementarias = asignaturas.reduce((totalHoras, asignatura) => {
      if (asignatura.tipo === "optativa") {
        return totalHoras + asignatura.horasSemanales;
      } else {
        return totalHoras
      }
    }, 0);
    setHorasTotales(horasTotales)
    setHorasLectivas(horasLectivas)
    setHorasComplementarias(horasComplementarias)
  }, [asignaturas])
  const [horasTotales, setHorasTotales] = useState<number>(0)
  const [horasLectivas, setHorasLectivas] = useState<number>(0)
  const [horasComplementarias, setHorasComplementarias] = useState<number>(0)

  return (
    <div className="container flex row align-items-center text-center mb-5">
      <div className="row">
        <div className="col-4 shadow-sm p-3 bg-white rounded">
          <div className="banner-leyenda">Horas Totales</div><strong>{horasTotales} Horas</strong>
        </div>
        <div className="col-4 shadow-sm p-3 bg-white rounded">
          <div className="banner-leyenda">Horas Lectivas</div><strong>{horasLectivas} Horas</strong>
        </div>
        <div className="col-4 shadow-sm p-3 bg-white rounded">
          <div className="banner-leyenda">Horas Complementarias</div><strong>{horasComplementarias} Horas</strong>
        </div>
      </div>
    </div>
  );
};

export default BannerHoras;
