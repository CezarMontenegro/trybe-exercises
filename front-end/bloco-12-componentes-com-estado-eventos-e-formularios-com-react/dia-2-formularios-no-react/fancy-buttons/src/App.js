import React from 'react';
import './App.css';


class App extends React.Component { 
  constructor() {
    super()
    this.state = {
      clicksbtn1: 0,
      clicksbtn2: 0, 
      clicksbtn3: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
   
  handleClick() {
    this.setState((prevState) => ({
      clicksbtn1: prevState.clicksbtn1 + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.clicksbtn1)}`);
    });
  }
  handleClick2() {
    this.setState((prevState) => ({
      clicksbtn2: prevState.clicksbtn2 + 1,
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.clicksbtn2)}`);
    });
  }
  handleClick3() {
    this.setState((prevState) => ({
      clicksbtn3: prevState.clicksbtn3 + 1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(this.state.clicksbtn3)}`);
    });
  }
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clicksbtn1, clicksbtn2, clicksbtn3 } = this.state;
    return (
      <div>
        <button 
          onClick={this.handleClick}
          style={{ backgroundColor: this.getButtonColor(clicksbtn1) }}
          >Meu botão | Count = {this.state.clicksbtn1}
        </button>
        
        <button 
          onClick={this.handleClick2}
          style={{ backgroundColor: this.getButtonColor(clicksbtn2) }}
          >Meu segundo botão | Count = {this.state.clicksbtn2}
        </button>
        
        <button 
          onClick={this.handleClick3}
          style={{ backgroundColor: this.getButtonColor(clicksbtn3) }}
          >Meu terceiro botão | Count = {this.state.clicksbtn3}
        </button>
      </div>
    )
  }
}

export default App;
