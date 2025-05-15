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
          <Box
            key={producto.id}
            title={producto.nombre}
            onView={() => handleView(producto)}
          />
        ))}
      </div>
      <Link to="/" className="home-btn">Home</Link>
    </div>
  );
};

export default ProductosVer;