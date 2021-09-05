import React from 'react';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class PersonalForm extends React.Component {

  render() {
    const {valor, handleChange} = this.props;
 
    return (
      <fieldset>
        <label>Nome:<input
          name='nome'
          type='text'
          value={valor.nome}
          onChange={handleChange}
          maxLength='40'
          required
        ></input></label>

        <label>Email:<input
          name='email'
          type='emai'
          value={valor.email}
          onChange={handleChange}
          maxLength='50'
          required
        ></input></label>

        <label>CPF:<input
          name='cpf'
          type='text'
          value={valor.cpf}
          onChange={handleChange}
          maxLength='11'
          required
          ></input></label>

        <label>Endereço:<input
          name='endereco'
          type='text'
          value={valor.endereco}
          onChange={handleChange}
          maxLength='200'
          required
        ></input></label>

        <label>Cidade:<input
          name='cidade'
          type='text'
          value={valor.cidade}
          onChange={handleChange}
          maxLength='28'
          required
        ></input></label>

        <label>Estado:<select
          name='estado'
          type='combobox'
          value={valor.estado}
          onChange={handleChange}
          required
          >
          {states.map((value) => (
            <option>{ value }</option>))
          }
        </select></label>

        <label>Tipo:<input
          name='tipo'
          type='radio'
          value={valor.tipo}
          onChange={handleChange}
          required
        ></input>Casa
        <input
          name='tipo'
          type='radio'
          value={valor.tipo}
          onChange={handleChange}
          required
        ></input>Apartamento</label>
      </fieldset>
    )
  }
}

export default PersonalForm;

// eslint-disable-next-line no-lone-blocks
{/* <div className="container">
              <label htmlFor="house">
                <input
                  type="radio"
                  id="house"
                  name="addressType"
                  value="house"
                  onChange={changeHandler}
                />
                Casa
              </label>
              <label htmlFor="apart">
                <input
                  type="radio"
                  id="apart"
                  name="addressType"
                  value="apartment"
                  onChange={changeHandler}
                />
                Apartamento
              </label>
            </div> */}