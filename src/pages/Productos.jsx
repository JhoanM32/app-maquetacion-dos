import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Productos = () => {
  const navigate = useNavigate(); 

  const handleBuscar = () => {
    navigate("/productos-ver");
  };

  return (
    <section className="contenedor">
      <section className="caja">
        <div className="caja-principal">
          <div className="caja-bottom">
            <input
              type="text"
              placeholder="ID"
              className="input-caja"
            />
          </div>
          <button className="boton-caja" onClick={handleBuscar}>Buscar</button>
          <div className="caja-links">
            <Link to="/" className="link-caja">
              Buscar Cliente
            </Link>
          </div>
        </div>
      </section>
      <section className="caja-dos">
        <h1> Buscar Producto</h1>
      </section>
    </section>
  );
};
export default Productos;
