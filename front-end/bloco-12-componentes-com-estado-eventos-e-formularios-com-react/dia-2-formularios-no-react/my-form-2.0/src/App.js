import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      estado: '',
      endereçoTipo: '',
      submit: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({target}) {
    const{name, value} = target;
    this.setState({
      [name] : value,
    })
  }

  handleReset() {
    this.setState({
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      estado: '',
      endereçoTipo: '',
      submit: false,
    })
  }

  handleSubmit() {
    this.setState({ submit: false})
    if( this.state.submit === false) {
      this.setState({ submit: true})
    }
  }

  render() {
    const estados = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];
    const {nome, email, cpf, endereço, estado, endereçoTipo, submit} = this.state;
    return (
      <div>
        <fieldset>
          <input
            name="nome"
            type="text"
            maxLength="40"
            required
            onChange={this.handleChange}
            value={ nome }
          />

          <input  
            name="email"
            type="email"
            maxLength="50"
            required
            onChange={this.handleChange}
            value={ email }
          />

          <input
            name="cpf"
            type="text"
            maxLength="11"
            required
            onChange={this.handleChange}
            value={ cpf }
          />

          <input
            name="endereço"
            type="text"
            maxLength="28"
            required
            onChange={this.handleChange}
            value={ endereço }
          />

          <select
            name="estado"
            required
            onChange={this.handleChange}
            value={ estado }
          >
            {estados.map((estado) => <option value={estado}>{estado}</option>)}
          </select>

          <label>Casa
            <input
              name="endereçoTipo"
              type="radio"
              onChange={this.handleChange}
              value="Casa"
            />
          </label>

          <label>Apartamento
            <input
              name="endereçoTipo"
              type="radio"
              onChange={this.handleChange}
              value="Apartamento"
            />
          </label>
        </fieldset>
        {submit && 
          <div>
            {`Nome: ${nome}
            Email: ${email}
            CPF: ${cpf}
            Endereço: ${endereço}
            Estado: ${estado}
            Tipo: ${endereçoTipo}`}
          </div>
        }

        <button
          type="button"
          onClick={this.handleSubmit}
        >
        Submit
        </button>

        <button
          type="button"
          onClick={this.handleReset}
        >
        Reset
        </button>
      </div>
    )
  }
}

export default App;
