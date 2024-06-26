import { ChangeEvent, FormEvent, useState } from "react";
import { Profesor, Asignatura } from "../types";

interface Props {
  profesor: Profesor
  profesores: Array<Profesor>
  nuevaAsignatura: React.Dispatch<React.SetStateAction<Profesor[]>>
}
const AsignaturaForm = ({ profesor, profesores, nuevaAsignatura }: Props) => {
  const [formValues, setFormValues] = useState<Asignatura>({
    nombre: "Matemáticas",
    tipo: "obligatoria",
    curso: "1º ESO",
    grupo: "A",
    horasSemanales: 3.5,
    espacio: "1º ESO - Grupo A"
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // creo copia del profesor con las materias actualizadas
    const materiasActualizadas: Profesor = {
      ...profesor,
      asignaturas: [...profesor.asignaturas, formValues]
    }

    // Creo copia de la lista de los profesores y actualizo el profe con nueva asignatura
    const listProfActualizada: Profesor[] = profesores.map(prof => {
      if (prof.id === profesor.id) {
        return materiasActualizadas
      }
      return prof
    })
    // actualizo la lista de profesores
    nuevaAsignatura(listProfActualizada)
  };

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    // parsear las horas
    const parsedValue = name === 'horasSemanales' ? parseFloat(value) : value
    setFormValues({
      ...formValues,
      [name]: parsedValue
    });
  };

  return (
    <div className="container mt-3 mb-3 asignatura-form">
      <h2>Añadir asignatura</h2>
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Selecciona la asignatura</label>
          <select className="form-select" name="nombre" onChange={handleChange} value={formValues.nombre}>
            <option value="Matemáticas">Matemáticas</option>
            <option value="Física y Química">Física y Química</option>
            <option value="Biología">Biología</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="tipo">Tipo de asignatura</label>
          <select className="form-select" name="tipo" onChange={handleChange} value={formValues.tipo}>
            <option value="obligatoria">Obligatoria</option>
            <option value="optativa">Optativa</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="curso">Curso</label>
          <select className="form-select" name="curso" onChange={handleChange} value={formValues.curso}>
            <option value="1º ESO">1º ESO</option>
            <option value="2º ESO">2º ESO</option>
            <option value="3º ESO">3º ESO</option>
            <option value="4º ESO">4º ESO</option>
            <option value="1º de Bachillerato">1º de Bachillerato</option>
            <option value="2º de Bachillerato">2º de Bachillerato</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="grupo">Grupo</label>
          <select className="form-select" name="grupo" onChange={handleChange} value={formValues.grupo}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="horasSemanales">Horas</label>
          <input className="form-control" type="number" min="0" step="0.5" name="horasSemanales" onChange={handleChange} value={formValues.horasSemanales} />
        </div>
        <div className="mb-2 form-group">
          <label htmlFor="espacio">Espacio</label>
          <select className="form-select" name="espacio" onChange={handleChange} value={formValues.espacio}>
            <option value="1º ESO - Grupo A">1º ESO - Grupo A</option>
            <option value="1º ESO - Grupo B">1º ESO - Grupo B</option>
            <option value="1º ESO - Grupo C">1º ESO - Grupo C</option>

            <option value="2º ESO - Grupo A">2º ESO - Grupo A</option>
            <option value="2º ESO - Grupo B">2º ESO - Grupo B</option>
            <option value="2º ESO - Grupo C">2º ESO - Grupo C</option>

            <option value="3º ESO - Grupo A">3º ESO - Grupo A</option>
            <option value="3º ESO - Grupo B">3º ESO - Grupo B</option>
            <option value="3º ESO - Grupo C">3º ESO - Grupo C</option>

            <option value="4º ESO - Grupo A">4º ESO - Grupo A</option>
            <option value="4º ESO - Grupo B">4º ESO - Grupo B</option>
            <option value="4º ESO - Grupo C">4º ESO - Grupo C</option>

            <option value="1º de Bach - Grupo A">1º de Bach - Grupo A</option>
            <option value="1º de Bach - Grupo B">1º de Bach - Grupo B</option>
            <option value="1º de Bach - Grupo C">1º de Bach - Grupo C</option>

            <option value="2º de Bach - Grupo A">2º de Bach - Grupo A</option>
            <option value="2º de Bach - Grupo B">2º de Bach - Grupo B</option>
            <option value="2º de Bach - Grupo C">2º de Bach - Grupo C</option>
          </select>
        </div>
        <div className="d-flex flex-row-reverse">
          <button className="btn btn-primary" type="submit">Añadir asignatura</button>
        </div>
      </form>
    </div>
  );
};

export default AsignaturaForm;
