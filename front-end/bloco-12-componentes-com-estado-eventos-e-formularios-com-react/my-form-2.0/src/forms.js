import React from 'react';

class Forms extends React.Component {
  constructor() {
    super()
    
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
    }
  }

  handleChange = (event) => {
    const {name} = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checkbox : event.target.value;
    
    this.setState({[name] : value,});
  }

  render() {
    const {nome, email, cpf, endereco, cidade, estado , tipo} = this.state;
    return (
      <fieldset>
        <label>Nome:<input
          name='nome'
          type='text'
          value={nome}
          onChange={this.handleChange}
        ></input></label>

        <label>Email:<input
          name='email'
          type='emai'
          value={email}
          onChange={this.handleChange}
        ></input></label>

        <label>CPF:<input
          name='cpf'
          type='number'
          value={cpf}
          onChange={this.handleChange}
          ></input></label>

        <label>Endereço:<input
          name='endereco'
          type='text'
          value={endereco}
          onChange={this.handleChange}
        ></input></label>

        <label>Cidade:<input
          name='cidade'
          type='text'
          value={cidade}
          onChange={this.handleChange}
        ></input></label>

        <label>Estado:<input
          name='estado'
          type='combobox'
          value={estado}
          onChange={this.handleChange}
        ></input></label>

        <label>Tipo:<input
          name='tipo'
          type='radio'
          value={tipo}
          onChange={this.handleChange}
        ></input></label>
      </fieldset>
    )
  }
}

export default Forms;