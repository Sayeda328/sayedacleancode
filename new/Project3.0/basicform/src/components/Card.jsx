import React from 'react'
import Button from 'react-bootstrap/Button';
import BootstrapCard from 'react-bootstrap/Card'; // Renamed imported Card
const CardComponent = (props) => { // Renamed component to CardComponent
  return (
    <BootstrapCard style={{ width: '18rem' }}>
      <BootstrapCard.Img variant="top" src={props.img}/>
      <BootstrapCard.Body>
        <BootstrapCard.Title>{props.title}</BootstrapCard.Title>
        <Button variant="primary">EDIT</Button>
      </BootstrapCard.Body>
    </BootstrapCard>
  )
}
export default CardComponent; // Exporting renamed component
