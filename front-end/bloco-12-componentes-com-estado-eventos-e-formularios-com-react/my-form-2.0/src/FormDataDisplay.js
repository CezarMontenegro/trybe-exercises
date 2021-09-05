import React from 'react';

class FormDataDisplay extends React.Component {
  render() {
    const {valor} = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <h3>Pessoal</h3>
        <div> Name: { valor.nome }</div>
        <div> Email: { valor.email }</div>
        <div> CPF: { valor.cpf }</div>
        <div> Endereço: { valor.endereco }</div>
        <div> Cidade: { valor.cidade }</div>
        <div> Estado: { valor.estado }</div>
        <div> Tipo de residência: { valor.endereco}</div>
        <h3>Profissional</h3>
        <div> Currículo: { valor.curriculo }</div>
        <div> Cargo: { valor.cargo }</div>
        <div> Descrição do cargo: { valor.descricao }</div>
      </div>
    );
  }
}

export default FormDataDisplay;