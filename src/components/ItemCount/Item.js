import React from "react";
import {Card,Button} from 'react-bootstrap'

const Item =( { title,price,image } )=>{
  return(
    <>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
         
    </>
  );
}

export default Item;