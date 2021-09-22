import React from 'react';

class Input2 extends React.Component {

  render() {
    const {handleChange, value} = this.props;

    let error = undefined;
    if(value > 10) error = 'Numero muito grande!';
    
    return (
      <div>
        <input
            name="input2Value"
            type="number"
            onChange={handleChange}
            value={value}
        />
        {error ? error : ''}
      </div>
    )
  }
}

export default Input2;