import React, { Component, useState } from 'react'

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    };

    // ta aparecendo so uma parte dos pokemon, ainda nao sei pq

    componentDidMount() {
        const { name, url } = this.props;
        const prePokemonIndex = url.split('/')[url.split('/').length - 2];
        //const pokemonIndex=`00${prePokemonIndex}`
        if (prePokemonIndex < 10) {
            var pokemonIndex = `00${prePokemonIndex}`;
        } else if (prePokemonIndex < 100) {
            var pokemonIndex = `0${prePokemonIndex}`;
        } else { var pokemonIndex = prePokemonIndex }
        // const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonIndex}.png`
        const imageUrl = `https://img.pokemondb.net/artwork/${name}.jpg`

        this.setState({
            name,
            imageUrl,
            pokemonIndex
        });
    }

    
    render() {
        function handleCaptura() {
            const [pokemons] = useState([]);
            console.log("Hello Pok " + name);
        }
        
        const name = this.props.name;
        const url = this.props.url;

        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <div className="cardHeader"></div>
                    <img className="imgpok" src={this.state.imageUrl} />
                    <h3 className="namepok">{name}</h3>
                    <h5>{this.state.pokemonIndex}</h5>
                    <button type="button" onClick={handleCaptura}>Capturar</button>
                </div>
            </div>
        )
    }
}
