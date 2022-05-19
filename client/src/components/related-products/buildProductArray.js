var buildProductArray = (results) => {
  var products = [];
  for ( var call = 0; call < results.data.data.length; call+=3 ) {
    var product = Object.assign( results.data.data[ call ], results.data.data[ call + 1 ] );
    var defaultFound = false;
    for ( var style = 0; style < results.data.data[ call + 2 ].results.length; style++ ) {
      if ( results.data.data[ call + 2 ].results[ style ]['default?'] ) {
        product = Object.assign( product, { styles: results.data.data[ call + 2 ].results[ style ] } );
        defaultFound = true;
        break;
      }
    }

    if ( !defaultFound ) {
      product = Object.assign( product, { styles: results.data.data[ call + 2 ].results[ 0 ] } );
    }

    products.push( product );
  }

  return products;
}

export default buildProductArray;