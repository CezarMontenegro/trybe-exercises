import './App.css';
import React from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';
import FormDataDisplay from './FormDataDisplay';

const initialState = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      curriculo: '',
      cargo: '',
      descricao: '',
      submitted: false,
}

class App extends React.Component {
  constructor() {
    super()
    
    this.state = initialState;
  }

  handleChange = (event) => {
    const {name} = event.target;
    let value = event.target.value
    if(name === 'nome') value = value.toUpperCase();
    
    this.setState({[name] : value,});
  }

  resetForm = () => { this.setState(initialState) };

  sendForm = () => { this.setState({ submitted: true }) };

  render(){
  return (
    <div className="App">
      <PersonalForm valor={this.state} handleChange={this.handleChange}/>

      <ProfessionalForm valor={this.state} handleChange={this.handleChange} />

      <button
        onClick={this.sendForm}
        value='Enviar'
      >Submit</button>

      <button
        onClick={this.resetForm}
        value={'Limpar'}
      >Clear</button>

      { this.state.submitted && <FormDataDisplay valor={this.state} /> }
    </div>
  );
}}

export default App;
