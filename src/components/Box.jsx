const Box = ({ title, onView }) => (
  <div className="producto-card">
    <h3>{title}</h3>
    <button className="ver-btn" onClick={onView}>Ver</button>
  </div>
);

export default Box;
