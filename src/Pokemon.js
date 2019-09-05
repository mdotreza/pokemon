import React, {useState,useEffect , Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class PokemonCard extends Component{
    render(){
      const {pokemon,id} = this.props;
      return <div className="pokemon--species">
                <Link to={`/Pokemon/${id}`}>
                <div className="pokemon--species--container">
                  <div className="pokemon--species--sprite">
                    <img src={process.env.PUBLIC_URL + `/image/${id}.png`} />
                  </div>
                      <div className="pokemon--species--name"> {pokemon.name} </div>
                </div>
                </Link>
            </div>;
      }
  }
function Pokemon() {
    
    useEffect(() =>{
        fetchItems();
    },[]);

    
    const[items,setItems] =useState([]);

    const fetchItems = async()=>{
        const data = await fetch('http://pokeapi.co/api/v2/pokemon?limit=151');
        const items = await data.json();
        console.log(items);
        setItems(items.results);
    }

  return (
        <div className="pokemon--species">
            {items.map((pokemon,index)=>(
                <PokemonCard pokemon={pokemon} id={index+1}/>   
                ))}
        </div>
                
    )
}

export default Pokemon ;
