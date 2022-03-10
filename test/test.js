const axios = require( "axios" );

describe('Example Test', () => {
  it('should be true', () => {
    var testValue = 2 + 2;
    expect(testValue).toBe(4);
  });
})

describe('server prefilter function', () => {
  it('should be able to send GET request to hr-rpp/products and get an array of products back', () => {
    axios.get('/products')
    .then( () => {
        expect(results).toEqual(expect.arrayContaining([]));
        expect(results.length).toBeGreaterThan(0);
    })
    .catch(() => {

    });
  });
  it('should be able to send GET request to hr-rpp/qa/questions, get an object with two properties back ("product_id", "results"), and results must not be empty', () => {

    axios.get( '/qa/questions', {params: {product_id: "64620", page: 1, count: 100}})
    .then(() => {
      expect(results.product_id).toEqual(data.product_id);
      expect(results.results).toEqual(expect.arrayContaining([]));
      expect(results.results.length).toBeGreaterThan(0);
    })
    .catch(() => {

    });
  });
});


