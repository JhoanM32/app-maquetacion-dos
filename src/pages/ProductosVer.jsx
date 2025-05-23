import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './ProductosVer.css';
import Box from "../components/box";

const ProductosVer = () => {
  const [ProductosVer, setProductosVer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/src/services/fake-api.json")
      .then((res) => res.json())
      .then((data) => setProductosVer(data.productos || []));
  }, []);

  const handleView = (ProductosVer) => {
    navigate("/vista-imagenes", { state: { ProductosVer } });
  };

  return (
    <div className="productos-container">
      <div className="productos-grid">
        {ProductosVer.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <button className="ver-btn" onClick={() => handleView(producto)}>Ver</button>
          </div>
        ))}
      </div>
      <Link to="/productos" className="home-btn">Home</Link>
    </div>
  );
};

export default ProductosVer;
/*<h3>{usuario.nombre}</h3>*/