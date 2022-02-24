import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.features = {};
  }

  buildComparisonTable() {
    var features = {};
    var currentProductFeatures = this.props.currentProduct.features;
    for (var i = 0; i < currentProductFeatures.length; i++) {
      features[currentProductFeatures[i].feature] = {currentProduct: currentProductFeatures[i].value};
    }

    var selectedProductFeatures = this.props.selectedProduct.features;
    for (var i = 0; i < selectedProductFeatures.length; i++) {
      if (features[selectedProductFeatures[i].feature] === undefined) {
        features[selectedProductFeatures[i].feature] = {selectedProduct: selectedProductFeatures[i].value};
      } else {
        features[selectedProductFeatures[i].feature].selectedProduct = selectedProductFeatures[i].value;
      }
    }

    this.features = features;
  }

  render() {
    var classes = 'comparison-modal';
    if ( this.props.visible ) {
      classes += ' comparison-modal-visible';
    }

    this.buildComparisonTable();
    console.log('currentProduct:', this.props.currentProduct );
    console.log('selectedProduct:', this.props.selectedProduct);
    console.log('features:', this.features);

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
              {Object.keys(this.features).map((feature) => {
                var currentProduct = <td>{this.features[feature].currentProduct}</td>
                if (this.features[feature].currentProduct === true) {
                  currentProduct = <td>&#10003;</td>
                }

                var selectedProduct = <td>{this.features[feature].selectedProduct}</td>
                if (this.features[feature].selectedProduct === true) {
                  selectedProduct = <td>&#10003;</td>
                }

                return (
                  <tr>
                    {currentProduct}
                    <td>{feature}</td>
                    {selectedProduct}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Comparison;