import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hospital</h1>

      <ul>
        <Link to={"/select"}>Consultar pacientes</Link>
        <br />
        <br />
        <Link to={"/create"}>Ingresar paciente</Link>
      </ul>
    </div>
  );
};

export default Home;
