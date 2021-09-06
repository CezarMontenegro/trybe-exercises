import React from "react";
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    const {pokemons} = this.props;
    return (
      <div>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokeLista={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;

