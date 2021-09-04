import React from 'react';

class InputEmail extends React.Component {
    validateEmail = (param) => {
        const validation = param.length >= 3 || param === '';
        if(!validation) return 'Insira pelo menos 3 caracteres'
      }
  render() {
    const {valor, atualizaPai} = this.props;
    return (
      <>  
      <input
        type='email'
        name='email'    
        value={valor}
        onChange={atualizaPai}
      />
      {this.validateEmail(valor)}
      </>
    );
  }
}

export default InputEmail;