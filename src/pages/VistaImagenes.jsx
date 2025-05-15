import { Link, useLocation } from "react-router-dom";
import "./VistaImagenes.css";

const VistaImagenes = () => {
  const location = useLocation();
  const producto = location.state?.producto;

  return (
    <div className="vista-img-container">
      <div className="imagenes-row">
        <div className="img-box">
          <div className="img-placeholder"></div>
          <div className="img-label">
            {producto ? producto.nombre : "Imagen"}
          </div>
        </div>
        <div className="img-box">
          <div className="img-placeholder"></div>
          <div className="img-label">
            {producto ? producto.nombre : "Imagen"}
          </div>
        </div>
      </div>
      <div className="btn-row">
        <Link to="/productos-ver" className="btn-listado">Listado productos</Link>
      </div>
    </div>
  );
};

export default VistaImagenes;
