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

    var features = Object.keys(this.features).map((feature) => {
      var currentProduct = <td className='comparison-feature comparison-current-product-feature'>{this.features[feature].currentProduct}</td>
      if (this.features[feature].currentProduct === true) {
        currentProduct = <td className='comparison-feature comparison-current-product-feature'>&#10003;</td>
      }

      var selectedProduct = <td className='comparison-feature comparison-selected-product-feature'>{this.features[feature].selectedProduct}</td>
      if (this.features[feature].selectedProduct === true) {
        selectedProduct = <td className='comparison-feature comparison-selected-product-feature'>&#10003;</td>
      }

      return (
        <tr key={feature} className='comparison-row'>
          {currentProduct}
          <td className='comparison-feature'>{feature}</td>
          {selectedProduct}
        </tr>
      )
    });

    return (
      <div className={classes} onClick={this.props.toggle}>
        <div className='comparison-content'>
          <div className='related-products-compare-header'>COMPARING</div>
          <div>
            <table className='comparison-table'>
              <thead>
                <tr>
                  <th className='comparison-currentProduct-name'>{this.props.currentProduct.name}</th>
                  <th></th>
                  <th className='comparison-selectedProduct-name'>{this.props.selectedProduct.name}</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className='comparison-table-body'>
            <table className='comparison-table'>
              <tbody>
                {features}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Comparison;