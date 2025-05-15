import { Link, useNavigate } from "react-router-dom";
import "./UsuarioClientes.css";

const usuarios = [
  { id: 1, nombre: "Carlos Torres" },
  { id: 2, nombre: "Camila Perez" },
  { id: 3, nombre: "Juan Perez" },
  { id: 4, nombre: "Maria Lopez" },
  { id: 5, nombre: "Pedro Gonzalez" },
  { id: 6, nombre: "Luis" },
];

const UsuarioClientes = () => {
  const navigate = useNavigate();

  const handleView = (usuario) => {
    navigate("/vista-cliente", { state: { usuario } });
  };

  return (
    <div className="usuarios-container">
      <div className="usuarios-grid">
        {usuarios.map((usuario) => (
          <div className="usuario-card" key={usuario.id}>
            <h3>{usuario.nombre}</h3>
            <button className="ver-btn" onClick={() => handleView(usuario)}>Ver</button>
          </div>
        ))}
      </div>
      <Link to="/" className="home-btn">Home</Link>
    </div>
  );
};

export default UsuarioClientes;