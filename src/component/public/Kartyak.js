import React from 'react'

import { Row } from 'react-bootstrap'
import Kartya from './Kartya'



export default function Kartyak(props) {


  return (
    <div>
      <h2 className="text-center mb-4">Könyvek</h2>
      <Row>
        {props.termekLista.map((element) => (
          <Kartya adat={element} key={element.id} />
        ))}
      </Row>
    </div>
  )
}