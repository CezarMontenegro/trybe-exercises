import React from 'react';

class Button extends React.Component {
  render() {
    const {text} = this.props;
    return (
      <div className="Button">
        <button
          onClick={ console.log( text )}
        >
        Botao
        </button>
      </div>
    );
  }
}

export default Button;