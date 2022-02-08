import React from 'react';

class Input1 extends React.Component {

  render() {
    const {handleChange, value} = this.props;
    
    let error = undefined;
    if(value.length > 40) error = 'Texto muito grande!';
    if(value.length < 10) error = 'Texto muito pequeno!';

    return (
      <div>
        <input
            name="input1Value"
            type="text"
            onChange={handleChange}
            value={value}
        />
        {error ? error : ''}
      </div>
    )
  }
}

export default Input1;
