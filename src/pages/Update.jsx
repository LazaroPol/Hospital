import { useEffect, useState } from "react";
import { getPerson, updatePerson } from "../services/api";
import { useParams } from "react-router-dom";

const Update = () => {
  const [pacienteId, setPacienteId] = useState([]);

  const [paciente, setPaciente] = useState({
    id: "",
    name: "",
    surname: "",
    date: "",
  });

  const updatePaciente = () => {
    updatePerson(paciente);
  };

  const { id } = useParams();

  useEffect(() => {
    getPerson(id).then(setPacienteId);
  }, [id]);

  return (
    <div>
      {pacienteId.map((idPaciente) => ({ idPaciente }))}
      <p>Introduce el nuevo nombre</p>
      <input
        type="text"
        name="nombre"
        onChange={(e) => setPaciente({ ...paciente, name: e.target.value })}
      />
      <p>Introduce el nuevo apellido</p>
      <input
        type="text"
        name="apellido"
        onChange={(e) => setPaciente({ ...paciente, surname: e.target.value })}
      />
      <p>Introduce la nueva fecha</p>
      <input
        type="text"
        name="fecha"
        onChange={(e) => setPaciente({ ...paciente, date: e.target.value })}
      />
      <br />
      <br />
      <button onClick={updatePaciente}>Ejecutar modificacion</button>
    </div>
  );
};

export default Update;
