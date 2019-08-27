import React, {useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';
import { types } from '@babel/core';

function Pokemon({ match }) {
    
    useEffect(() =>{
        fetchItem();
        console.log(match);
    }, []);


    const[items,setItems] =useState({
        sprites:{}
    });

    const fetchItem = async()=>{
        const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`);

        const item = await fetchItem.json();
        setItems(item);
        console.log(item);

    }
  return (
    <Container>
        <Row>
            <Col xs="12">
                <h2 className="namePok">{items.name}</h2>
                <img className="pokemonIMG" src={items.sprites.front_default}/> 
            </Col>
            <Col xs="12" className="desc">
            <h2>Description</h2>
            <h4>Weight:{items.weight}</h4>
            <h4>Height:{items.height}</h4>
            </Col>
        </Row>
    </Container>
  );
}

export default Pokemon ;
