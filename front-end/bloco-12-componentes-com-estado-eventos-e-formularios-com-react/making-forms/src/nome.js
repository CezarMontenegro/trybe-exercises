import React from "react";

class InputName extends React.Component {
  validateName = (param) => {
    const validation = param.length >= 3 || param === '';
    if(!validation) return 'Insira pelo menos 3 caracteres'
  }  
  render() {
    const {valor, atualizaPai} = this.props;
    return (
        <>
        <input
          type='text'
          name='nome'
          value={valor}
          onChange={atualizaPai}
        />
        {this.validateName(valor)}
        </>
    );    
  }
}

export default InputName;