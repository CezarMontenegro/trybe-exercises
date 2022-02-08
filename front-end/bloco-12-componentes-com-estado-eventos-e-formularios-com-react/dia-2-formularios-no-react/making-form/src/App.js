import React from 'react';
import Input1 from './Input1';
import Input2 from './Input2';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input1Value: '',
      input2Value: 0,
      textareaValue: '',
      selectValue: '',
      checkboxValue: '',
      errorForm: false,
    }

    this.handleChangeInput1 = this.handleChangeInput1.bind(this);
  
  }

  handleError() {
    const { input1Value, input2Value } = this.state;

    const errorCases = [
      !input1Value,
      !input2Value,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChangeInput1({target}) {
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value,
    })
  }

  render() {
    return (
      <fieldset>
        <Input1 value={this.state.input1Value} handleChange={this.handleChangeInput1} />

        <Input2 value={this.state.input2Value} handleChange={this.handleChangeInput1} />

        <select
          name="selectValue"
          onChange={this.handleChangeInput1}
          value={this.state.selectValue}
        >
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cranberry">Cranberry</option>
        </select>
    
        <textarea
          name="textareaValue"
          type="text"
          onChange={this.handleChangeInput1}
          value={this.state.textareaValue}
        />

        <input
          name="checkboxValue"
          type="checkbox"
          onChange={this.handleChangeInput1}
          value={this.state.textareaValue}
        />
      </fieldset>
    )
  }
}

export default App;

