import React from 'react';

class Pokemon extends React.Component {

  render() {
    const {pokeLista: {image, name, type, averageWeight,}} = this.props;
    return (
      <div>
        <img src={image} alt={`Imagem do ${name}`}/>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`${averageWeight.value}${averageWeight.measurementUnit}`}</p>
      </div>
    )
  }
}

export default Pokemon;