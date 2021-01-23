import './App.css';
import axios from 'axios';
import React,{Component} from 'react';
import PokemonCard from './PokemonCard';

export default class App extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=1118",
    pokemon: null
  };

  async componentDidMount(){
    const res= await axios.get(this.state.url);
    this.setState({pokemon: res.data['results']});
  }

  render(){
    return(
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">
            <img id="" src="midia/iconepokebola2.png"></img>
              POKÉMON
          </a> 
        </nav>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name} 
                url={pokemon.url} 
              />
            ))}
          </div>
        ):(
          <h1>Loading Pokemon</h1>    //aqui podemos colocar uma imagenzinha de uma pokebola girando pra ser o carregamento da pagina
        )}
      </React.Fragment>
    );
  }

}
