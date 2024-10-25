import { useEffect, useState } from "react";
import { getAllPersons } from "../services/api";

const Select = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    getAllPersons().then(setPacientes);
  }, []);
  return (
    <div>
      <h1>Lista de pacientes en el sistema</h1>
      {pacientes.map((paciente) => (
        <ul>
          <p key={paciente.id}>
            Id: {paciente.id} Nombre: {paciente.name} {paciente.surname}
          </p>
        </ul>
      ))}
    </div>
  );
};

export default Select;
