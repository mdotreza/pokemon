import React from 'react';
import './App.css';
import Nav from './Nav';
import Pokemon from './Pokemon';
import Mypokemon from './Mypokemon';
import PokemonDetail from './PokemonDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';

function App() {
  return (
      <Router>
        <div className="App">       
          <Nav />
          <Switch>           
            <Route path="/" exact component={Pokemon}/>
            <Route path="/Mypokemon" component={Mypokemon}/>
            <Route path="/Pokemon" exact component={Pokemon}/>
            <Route path="/Pokemon/:id" component={PokemonDetail}  />
          </Switch>
        </div>
      </Router>
  );
}

const Home =()=>(
  <div>
    <h1>Pokedex</h1>
    
  </div>
)

export default App;
