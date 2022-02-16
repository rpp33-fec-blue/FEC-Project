import React from 'react';
import ProductCard from './productCard.jsx';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.outfit.map( ( item ) => {
          return (
            <ProductCard item={ item }/>
          );
        })}
      </div>
    );
  }
}

export default OutfitList;