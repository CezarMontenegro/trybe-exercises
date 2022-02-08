import React from 'react';
import PokeDex from './PokeDex';
import pokemons from './Data';

class App extends React.Component {
  render() {
    return(
      <PokeDex pokemons={pokemons}/>
    )
  }
}

export default App;
