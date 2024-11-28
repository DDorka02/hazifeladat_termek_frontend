import React, { useContext } from 'react'
import { KosarContext } from '../../contexts/KosarContext';
import { Button } from 'react-bootstrap';
import { ApiContext } from '../../contexts/ApiContext';

export default function Termek(props) {

  const { termekLista, setTermekLista } = useContext(ApiContext);

  const torles = () => {
    const listaFrissitese = termekLista.filter(item => item.id !== props.adat.id);
    setTermekLista(listaFrissitese); 
  };
    const {kosarba} =useContext(KosarContext)
    function kattintas() {
        kosarba(props.adat)        
    }

  return (
    <tr>
      <td>{props.adat.iro}</td>
      <td>{props.adat.cime}</td>
        <td>{props.adat.leiras}</td>
        <td>{props.adat.ar}</td>
        <td>{props.adat.db}</td>
        <td>
        <Button variant="danger" onClick={torles}>Törlés</Button>
      </td>
      <td>
        <Button variant="warning" onClick={() => alert('Szerkesztés funkció még nincs implementálva')}>Szerkesztés</Button>
      </td>
      </tr>
      
  )
}