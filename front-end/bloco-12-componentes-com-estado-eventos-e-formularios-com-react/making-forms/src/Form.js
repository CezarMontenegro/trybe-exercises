import React from 'react';

class Form extends React.Component {
  constructor () {
    super();
    
    this.state = { 
      nome: '',
      email: '',
      terms: false, 
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    const { email, name, terms} = this.state;
    return (
      <div>
         <label htmlFor="terms">
              <input
                type="checkbox"
                name="terms"
                onChange={ this.handleChange }
                value={ terms }
              />
              Concordo com termos e acordos
            </label>


        <input
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
        />

        <input
          type='text'
          name='nome'
          value={name}
          onChange={this.handleChange}
        />
      </div>
    );
}
}

export default Form;