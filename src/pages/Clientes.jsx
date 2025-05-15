import { Link, useNavigate } from "react-router-dom";
import "./Home.css";


const Clientes = () => {
  const navigate = useNavigate(); 

  const handleBuscar = () => {
    navigate("/usuarios-clientes");
  };

  return (
    <section className="contenedor">
      <section className="caja">
        <div className="caja-principal">
          <div className="caja-bottom">
            <input
              type="text"
              placeholder="Correo"
              className="input-caja"
            />
          </div>
          <button className="boton-caja" onClick={handleBuscar}>Buscar</button>
          <div className="caja-links">
            <Link to="/productos" className="link-caja">
              Buscar Producto
            </Link>
          </div>
        </div>
      </section>
      <section className="caja-dos">
        <h1>Buscar Clientes</h1>
      </section>
    </section>
  );
};
export default Clientes;