import React, {useState,useEffect} from 'react';
import './App.css';
import {Container,Row,Col, Button} from 'reactstrap';
import PropTypes  from 'prop-types';

function PokemonDetail({ match }) {
    
    

    useEffect(() =>{
        fetchItem();
        console.log(match);
    }, []);

    const[items,setItems] =useState({
        sprites:{}
    });

    const[itemsTwo,setItemsTwo] =useState([]);
    const[itemsType,setItemsType] =useState([]);

    const fetchItem = async()=>{
        const fetchItem = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`);

        const item = await fetchItem.json();
        setItems(item);
        setItemsTwo(item.abilities);
        setItemsType(item.types);
        console.log(item,item.abilities,item.types);
    }
  return (
    <Container>
        <Row>
            <Col xs="12">
                <h2 className="namePok">{items.name}</h2>
                <img className="pokemonIMG" src={items.sprites.front_default}/> 
            </Col>
        </Row>
        <Row>
            <Col xs="12" className="grey">
                <h2>Description</h2>
                <h4>Weight: {items.weight}</h4>
                <h4>Height: {items.height}</h4>
            </Col>    
            <Col xs="12" className="white">
                <h4>Ability:</h4>  
            </Col>  
            {itemsTwo.map(pokemon=>(
                <Col xs="6" className="white">
                    <h4 className="namePok">
                        {pokemon.ability.name}
                    </h4>
                </Col>
            ))}
            <Col xs="12" className="grey">
                <h4>Type:</h4>  
            </Col> 
            {itemsType.map(pokemon=>(
                <Col xs="6" className="grey">
                    <h4 className="namePok">
                        {pokemon.type.name}
                    </h4>
                </Col>
            ))}
        </Row>
    </Container>
  );
}

export default PokemonDetail ;
