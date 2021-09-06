import React from "react";
import Pokedex from './pokedex';
import pokemons from './data'

class App extends React.Component {
  render() {
    return (
      <div>
        <Pokedex pokemons={pokemons}/>
      </div>
    );
  }
}

export default App;
