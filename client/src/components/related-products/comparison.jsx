import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
  }

  buildComparisonTable() {

  }

  render() {
    var classes = 'comparison-modal';
    if ( this.props.visible ) {
      classes += ' comparison-modal-visible';
    }

    console.log('currentProduct:', this.props.currentProduct );
    console.log('selectedProduct:', this.props.selectedProduct);
    var features = this.props.currentProduct.features.concat( this.props.selectedProduct.features );
    console.log('features:', features);

    return (
      <div className={classes} onClick={this.props.toggle}>
        <div className='comparison-content'>
          <div className='related-products-compare-header'>COMPARING</div>
          <table>
            <thead>
              <tr>
                <th>{this.props.currentProduct.name}</th>
                <th></th>
                <th>{this.props.selectedProduct.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Check</td>
                <td>Feature</td>
                <td></td>
              </tr>
              <tr>
              <td>Check</td>
                <td>Feature</td>
                <td></td>
              </tr>
              <tr>
              <td>Check</td>
                <td>Feature</td>
                <td>Check</td>
              </tr>
              <tr>
              <td></td>
                <td>Feature</td>
                <td>Check</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Comparison;