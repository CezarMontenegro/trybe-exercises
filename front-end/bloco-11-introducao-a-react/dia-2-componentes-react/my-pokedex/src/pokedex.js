import React from 'react';
import PokeCards from './PokeCards';


class PokeDex extends React.Component {
  render() {
    const {pokemons} = this.props;
    return(
      <div>
       {pokemons.map((pokemon) => <PokeCards pokemon={pokemon}/>)}
      </div>
    )
  }
}

export default PokeDex;
