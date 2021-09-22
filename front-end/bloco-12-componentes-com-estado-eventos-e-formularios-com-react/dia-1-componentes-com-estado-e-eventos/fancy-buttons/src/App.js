import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      botao1: 0,
      botao2: 0,
      botao3: 0,
    }
    
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    
  }

  handleClick1() {
    this.setState(({botao1}) => ({botao1: botao1 + 1 }) )
  }
  handleClick2() {
    this.setState((state) => ({botao2: state.botao2 + 1 }) )
  }
  handleClick3() {
    this.setState((state) => ({botao3: state.botao3 + 1 }) )
  }

  getButtonColor(number) {
    return number % 2 === 0 ? 'green' : 'white'
  }

  render() {
    const { botao1, botao2, botao3 } = this.state;
    return (
      <div>
        <button 
        onClick={this.handleClick1}
        style={{ backgroundColor: this.getButtonColor(botao1) }}
          >
          { botao1 }
        </button>
        <button onClick={this.handleClick2}>{botao2}</button>
        <button onClick={this.handleClick3}>{botao3}</button>
      </div>
    )
  }
}

export default App;

