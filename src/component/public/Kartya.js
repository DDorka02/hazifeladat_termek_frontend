import React, { useContext } from 'react'
import { KosarContext } from '../../contexts/KosarContext';
import { Button, Card, Col } from 'react-bootstrap';
import { ApiContext } from '../../contexts/ApiContext';


export default function Kartya(props) {
    const {kosarba} =useContext(KosarContext)
    function kattintas() {
        kosarba(props.adat)        
    }

  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card className="shadow-lg border-0 rounded">
      <Card.Img
          variant="top"
          src={props.adat.image}
          alt={props.adat.cime}
          style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
        />
        <Card.Body>
          <Card.Title>{props.adat.iro}</Card.Title>
          <Card.Text>{props.adat.cime}</Card.Text>
          <Card.Text>{props.adat.leiras}</Card.Text>
          <Card.Text>Ár: {props.adat.ar} Ft</Card.Text>
          <Card.Text>Darabszám: {props.adat.db}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary" onClick={kattintas}>
              Kosárba
            </Button>
          </div>
        </Card.Body>
      </Card>
      </Col>
      
  )
}