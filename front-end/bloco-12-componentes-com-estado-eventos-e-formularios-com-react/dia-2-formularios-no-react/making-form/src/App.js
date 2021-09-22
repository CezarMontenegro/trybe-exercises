import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input1Value: '',
      input2Value: 0,
      textareaValue: '',
      selectValue: '',
    }

    this.handleChangeInput1 = this.handleChangeInput1.bind(this);
    this.handleChangeInput2 = this.handleChangeInput2.bind(this);
    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeInput1({target}) {
    this.setState({
      input1Value : target.value,
    })
  }

  handleChangeInput2({target}) {
    this.setState({
      input2Value: target.value,
    })
  }

  handleChangeTextarea({target}) {
    this.setState({
      textareaValue: target.value,
    })
  }

  handleChangeSelect({target}) {
    this.setState({
      selectValue: target.value,
    })
  }

  render() {
    return (
      <div>
        <select
          onChange={this.handleChangeSelect}
          value={this.state.selectValue}
        >
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cranberry">Cranberry</option>
        </select>
        
        <input
          type="text"
          onChange={this.handleChangeInput1}
          value={this.state.input1Value}
        />

        <input
          type="number"
          onChange={this.handleChangeInput2}
          value={this.state.input2Value}
        />
        <textarea 
          type="text"
          onChange={this.handleChangeTextarea}
          value={this.state.textareaValue}
        />
      </div>
    )
  }
}

export default App;

