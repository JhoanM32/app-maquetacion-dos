import "./VistaCliente.css";
import { Link, useLocation } from "react-router-dom";

const VistaCliente = () => {
  const location = useLocation();
  const usuario = location.state?.usuario;

  return (
    <div className="cliente-container">
      <div className="cliente-content">
        <div className="cliente-img-col">
          <div className="cliente-img-placeholder">
            <svg width="100%" height="100%" viewBox="0 0 320 320">
              <rect x="0" y="0" width="320" height="320" fill="none" stroke="#444" strokeWidth="3"/>
              <line x1="0" y1="0" x2="320" y2="320" stroke="#888" strokeWidth="2"/>
              <line x1="320" y1="0" x2="0" y2="320" stroke="#888" strokeWidth="2"/>
            </svg>
          </div>
          <div className="cliente-img-label">{usuario ? usuario.nombre : "Imagen"}</div>
        </div>
        <div className="cliente-text-col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="cliente-btn-row">
        <Link to="/usuarios-clientes" className="cliente-btn-listado">Listado Clientes</Link>
      </div>
    </div>
  );
};

export default VistaCliente;