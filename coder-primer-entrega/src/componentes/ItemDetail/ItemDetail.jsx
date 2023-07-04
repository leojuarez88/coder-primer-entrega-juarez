import React from "react";

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae
        nam dignissimos quibusdam quia non cumque fugiat velit, tempore quidem
        id minima eius voluptatibus aspernatur ipsum, veritatis inventore! Unde,
        sint.
      </p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
