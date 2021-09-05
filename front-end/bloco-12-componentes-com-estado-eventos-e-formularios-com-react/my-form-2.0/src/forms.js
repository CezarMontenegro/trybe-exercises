import React from 'react';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

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
    let value = event.target.type === 'checkbox' ? event.target.checkbox : event.target.value;

    if (name === 'nome') value = value.toUpperCase();
    
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
          maxLength='40'
          required
        ></input></label>

        <label>Email:<input
          name='email'
          type='emai'
          value={email}
          onChange={this.handleChange}
          maxLength='50'
          required
        ></input></label>

        <label>CPF:<input
          name='cpf'
          type='text'
          value={cpf}
          onChange={this.handleChange}
          maxLength='11'
          required
          ></input></label>

        <label>Endereço:<input
          name='endereco'
          type='text'
          value={endereco}
          onChange={this.handleChange}
          maxLength='200'
          required
        ></input></label>

        <label>Cidade:<input
          name='cidade'
          type='text'
          value={cidade}
          onChange={this.handleChange}
          maxLength='28'
          required
        ></input></label>

        <label>Estado:<select
          name='estado'
          type='combobox'
          value={estado}
          onChange={this.handleChange}
          required
          >
          {states.map((value, key) => (
            <option key={ key }>{ value }</option>))
          }
        </select></label>

        <label>Tipo:<input
          name='tipo'
          type='radio'
          value={tipo}
          onChange={this.handleChange}
          required
        ></input>Casa
        <input
          name='tipo'
          type='radio'
          value={tipo}
          onChange={this.handleChange}
          required
        ></input>Apartamento</label>
      </fieldset>
    )
  }
}

export default Forms;





// changeHandler = event => {
//   let { name, value } = event.target;

//   if (name === 'name') value = value.toUpperCase();
//   if (name === 'address') value = this.validateAddress(value);

//   this.updateState(name, value);
// }

// onBlurHandler = event => {
//   let { name, value } = event.target;

//   if (name === 'city') value = value.match(/^\d/) ? '' : value;

//   this.updateState(name, value);
// }

// updateState(name, value) {
//   this.setState((state) => ({
//     [name]: value,
//     formError: {
//       ...state.formError,
//       [name]: this.validateField(name, value)
//     }
//   }));
// }

// validateAddress = address => address.replace(/[^\w\s]/gi, '')

// handleSubmit = event => {
//   event.preventDefault();
// }

// validateField(fieldName, value) {
//   switch (fieldName) {
//     case 'email':
//       const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
//       return isValid ? '' : ' is invalid';
//     default:
//       break;
//   }
//   return '';
// }

// resetForm = () => { this.setState(INITIAL_STATE) };

// sendForm = () => { this.setState({ submitted: true }) };



// import React, { Component } from 'react';

// const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

// class PersonalForm extends Component {
//   render() {
//     const { changeHandler, onBlurHandler, currentState } = this.props;
//     return (
//       <fieldset>
//             <legend>Dados pessoais</legend>
//             <div className="container">
//               Nome:
//               <input
//                 type="name"
//                 name="name"
//                 maxLength="40"
//                 required
//                 onChange={changeHandler}
//               />
//             </div>
//             <div className="container">
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 maxLength="50"
//                 required
//                 onChange={changeHandler}
//               />
//             </div>
//             <div className="container">
//               CPF:
//               <input
//                 type="text"
//                 name="cpf"
//                 maxLength="11"
//                 required
//                 onChange={changeHandler}
//               />
//             </div>
//             <div className="container">
//               Endereço:
//               <input
//                 type="text"
//                 name="address"
//                 maxLength="200"
//                 required
//                 onChange={changeHandler}
//               />
//             </div>
//             <div className="container">
//               Cidade:
//               <input
//                 type="text"
//                 name="city"
//                 maxLength="28"
//                 required
//                 value={currentState.city}
//                 onBlur={onBlurHandler}
//                 onChange={changeHandler}
//               />
//             </div>
//             <div className="container">
//               Estado:
//               <select
//                 name="countryState"
//                 required
//                 onChange={changeHandler}
//                 defaultValue=""
//               >
//                 <option value="">Selecione</option>
//                 {
//                   states.map((value, key) => (
//                     <option key={ key }>{ value }</option>
//                   ))
//                 }
//               </select>
//             </div>
//             <div className="container">
//               <label htmlFor="house">
//                 <input
//                   type="radio"
//                   id="house"
//                   name="addressType"
//                   value="house"
//                   onChange={changeHandler}
//                 />
//                 Casa
//               </label>
//               <label htmlFor="apart">
//                 <input
//                   type="radio"
//                   id="apart"
//                   name="addressType"
//                   value="apartment"
//                   onChange={changeHandler}
//                 />
//                 Apartamento
//               </label>
//             </div>
//           </fieldset>
//     );
//   }
// }

// export default PersonalForm;

