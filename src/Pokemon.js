import React, {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';

function Pokemon() {
    
    useEffect(() =>{
        fetchItems();
    },[]);

    
    const[items,setItems] =useState([]);

    const fetchItems = async()=>{
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const items = await data.json();
        console.log(items);
        setItems(items.results);
    }
  return (
      <Container>
          <Row>
            <h1>Pokemon List</h1>
          </Row>
          <Row>
                {items.map(pokemon=>(
                <Col xs="6" className="listPoke">
                    <h4 className="namePok" key={pokemon.name}>
                        <Link className="namePok" to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </h4>
                </Col>         
                ))};
          </Row>
      </Container>
    );
}

export default Pokemon ;
