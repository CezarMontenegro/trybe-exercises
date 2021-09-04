import React from 'react';
import InputEmail from './email';
import InputName from './nome';

class Form extends React.Component {
  constructor () {
    super();
    
    this.state = { 
      nome: '',
      email: '',
      terms: false, 
      file: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, nome, terms, file} = this.state;
    return (
      <fieldset>
        <label htmlFor="terms">
          <input
            type="checkbox"
            name="terms"
            onChange={ this.handleChange }
            value={ terms }
          />
          Concordo com termos e acordos
        </label>

        <InputEmail valor={email} atualizaPai={this.handleChange}/>
        
        <InputName valor={nome} atualizaPai={this.handleChange}/>

        <input
          type='file'
          name='arquivo'
          value={file}
          onChange={this.handleChange}
        />
      </fieldset>
    );
}
}

export default Form;