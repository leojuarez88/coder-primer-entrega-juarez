import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';

const Item = ({id, nombre, precio, img}) => {
   return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={nombre}/>
      <Card.Body>
        <Card.Title> {nombre}</Card.Title>
        <Card.Title>Precio: {precio}</Card.Title>
        <Card.Title>ID: {id}</Card.Title>
        <Card.Text>
          Lamparas y Veladores de la mas alta calidad
        </Card.Text>
        <Link to={`/item/${id}`}> Ver Detalles </Link>

      </Card.Body>
    </Card>
  );
}


export default Item