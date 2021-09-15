import React from "react";

class ProfessionalForm extends React.Component {
  render() {
    const {valor, handleChange} = this.props;
    return (
      <fieldset>
        <label>Curriculo:<textarea
          name='curriculo'
          type='text'
          value={valor.curriculo}
          onChange={handleChange}
          maxLength='1000'
          required
        >Resumo do currículo:</textarea></label>

        <label>Cargo:<textarea
          name='cargo'
          type='text'
          value={valor.cargo}
          onChange={handleChange}
          onMouseEnter={() => {
            alert('Preencha com cuidado esta informação.');
          }}
          maxLength='40'
          required
        >Resumo do currículo:</textarea></label>

        <label>Descrição do cargo:<textarea
          name='descricao'
          type='text'
          value={valor.descricao}
          onChange={handleChange}
          maxLength='500'
          required
        >Resumo do currículo:</textarea></label>
      </fieldset>
    )
  }
}

export default ProfessionalForm;
