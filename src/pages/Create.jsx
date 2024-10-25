import { useState } from "react";
import { savePersonName } from "../services/api";

const Create = () => {
  const [paciente, setPaciente] = useState({
    name: "",
    surname: "",
    date: "",
  });

  const savePerson = () => {
    savePersonName(paciente);
  };

  return (
    <div>
      <br />
      <button onClick={() => (window.location.href = "http://localhost:5173")}>
        Home
      </button>
      <br />
      <br />
      <p>Introduce el nombre</p>
      <input
        type="text"
        name="nombre"
        onChange={(e) => setPaciente({ ...paciente, name: e.target.value })}
      />
      <p>Introduce el apellido</p>
      <input
        type="text"
        name="apellido"
        onChange={(e) => setPaciente({ ...paciente, surname: e.target.value })}
      />
      <p>Introduce la fecha</p>
      <input
        type="text"
        name="fecha"
        onChange={(e) => setPaciente({ ...paciente, date: e.target.value })}
      />
      <br />
      <br />
      <button onClick={savePerson}>Añadir paciente</button>
      <br />
      <br />
    </div>
  );
};

export default Create;
