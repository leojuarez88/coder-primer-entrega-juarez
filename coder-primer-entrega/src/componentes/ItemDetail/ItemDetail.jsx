import React from "react";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="container" >
      <div className="row col-md-4 p-4">
        <h2> {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>
        Veladores y Lamparas de la mas alta calidad!
        </p>
        <img src={img} alt={nombre} />
      </div>
    </div>
  );
};

export default ItemDetail;
