import React from 'react';
import './App.css';

const task = (tarefa) => { return <li>{tarefa}</li>; }

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => task(tarefa)) }</ul>
    );
  }
}

export default App;
