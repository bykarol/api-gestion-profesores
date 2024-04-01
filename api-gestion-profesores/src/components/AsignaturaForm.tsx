import { ChangeEvent, FormEvent, useState } from "react";

const AsignaturaForm = () => {
  const [formValues, setFormValues] = useState({
    nombreAsignatura: "",
    tipoAsignatura: "",
    cursoAsignatura: "",
    grupoAsignatura: "",
    horaAsignatura: 3.5,
    espacioAsignatura: ""
  });

  // Función para manejar el cambio en los campos del formulario
  const handleInputChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aquí puedes enviar los valores del formulario a través de una función de envío o realizar otras acciones necesarias
    console.log("Formulario enviado:", formValues);
  };

  return (
    <div className="asignatura-form">
      <h2>Añadir asignatura</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombreAsignatura">Selecciona la asignatura</label>
          <select name="nombreAsignatura" onChange={handleInputChange} value={formValues.nombreAsignatura}>
            <option value="">Seleccione una asignatura</option>
            <option value="Matemáticas">Matemáticas</option>
            <option value="FísicaQuímica">Física y Química</option>
            <option value="CienciasNaturales">Ciencias Naturales</option>
          </select>
        </div>
        <div>
          <label htmlFor="tipoAsignatura">Tipo de asignatura</label>
          <select name="tipoAsignatura" onChange={handleInputChange} value={formValues.tipoAsignatura}>
            <option value="">Seleccione el tipo de asignatura</option>
            <option value="Obligatoria">Obligatoria</option>
            <option value="Optativa">Optativa</option>
          </select>
        </div>
        <div>
          <label htmlFor="cursoAsignatura">Curso</label>
          <select name="cursoAsignatura" onChange={handleInputChange} value={formValues.cursoAsignatura}>
            <option value="1eso">1º ESO</option>
            <option value="2eso">2º ESO</option>
            <option value="3eso">3º ESO</option>
            <option value="4eso">4º ESO</option>
            <option value="1bachillerato">1º de Bachillerato</option>
            <option value="2bachillerato">2º de Bachillerato</option>
          </select>
        </div>
        <div>
          <label htmlFor="grupoAsignatura">Grupo</label>
          <select name="grupoAsignatura" onChange={handleInputChange} value={formValues.grupoAsignatura}>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>
        </div>
        <div>
          <label htmlFor="horaAsignatura">Horas</label>
          <input type="number" min="0" step="0.5" name="horaAsignatura" onChange={handleInputChange} value={formValues.horaAsignatura} />
        </div>
        <div>
          <label htmlFor="espacioAsignatura">Espacio</label>
          <select name="espacioAsignatura" onChange={handleInputChange} value={formValues.espacioAsignatura}>
            <option value="1esoA">1º ESO - Grupo A</option>
            <option value="1esoB">1º ESO - Grupo B</option>
            <option value="1esoC">1º ESO - Grupo C</option>

            <option value="2esoA">2º ESO - Grupo A</option>
            <option value="2esoB">2º ESO - Grupo B</option>
            <option value="2esoC">2º ESO - Grupo C</option>

            <option value="3esoA">3º ESO - Grupo A</option>
            <option value="3esoB">3º ESO - Grupo B</option>
            <option value="3esoC">3º ESO - Grupo C</option>

            <option value="4esoA">4º ESO - Grupo A</option>
            <option value="4esoB">4º ESO - Grupo B</option>
            <option value="4esoC">4º ESO - Grupo C</option>

            <option value="1bachilleratoA">1º de Bach - Grupo A</option>
            <option value="1bachilleratoB">1º de Bach - Grupo B</option>
            <option value="1bachilleratoC">1º de Bach - Grupo C</option>

            <option value="2bachilleratoA">2º de Bach - Grupo A</option>
            <option value="2bachilleratoB">2º de Bach - Grupo B</option>
            <option value="2bachilleratoC">2º de Bach - Grupo C</option>
          </select>
        </div>
        <button type="submit">Añadir asignatura</button>
      </form>
    </div>
  );
};

export default AsignaturaForm;
