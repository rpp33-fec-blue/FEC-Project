const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const axios = require('axios');

describe('Example Test', () => {
  it('should be true', () => {
    var testValue = 2 + 2;
    expect(testValue).toBe(4);
  });
})

describe('server prefilter function', () => {
  it('should be able to send GET request to hr-rpp/products and get an array of products back', () => {
    var data = '';
    $.ajax({
      url: '/products',
      method: 'GET',
      data: data,
      success: (results) => {
        expect(results).toEqual(expect.arrayContaining([]));
        expect(results.length).toBeGreaterThan(0);
      }
    })
  });
  it('should be able to send GET request to hr-rpp/qa/questions, get an object with two properties back ("product_id", "results"), and results must not be empty', () => {
    var data = {"product_id":"64620"};
    $.ajax({
      url: '/qa/questions',
      method: 'GET',
      data: data,
      success: (results) => {
        expect(results.product_id).toEqual(data.product_id);
        expect(results.results).toEqual(expect.arrayContaining([]));
        expect(results.results.length).toBeGreaterThan(0);
      }
    })
  });
});

describe( 'API', () => {
  it( 'should be able to get data from /qa/questions', () => {
    return axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: 64620, count: 1000 } } )
      .then( ( results ) => {
        expect(results.data.data.results.length).toBeGreaterThan(0);
      });
  });
  it( 'should be able to get data from /products/:${productId}/related', () => {
    return axios.get( 'http://localhost:8080/products/:64620/related', { params: { product_id: 64620 } } )
      .then( ( results ) => {
        console.log('related:', results.data);
        expect(results.data.data.results.length).toBeGreaterThan(0);
      });
  });
  it( 'should be able to get data from /reviews', () => {
    return axios.get( 'http://localhost:8080/reviews', { params: { product_id: 64620, count: 1000 } } )
      .then( ( results ) => {
        console.log('reviews:', results.data);
        expect(results.data.data.results.length).toBeGreaterThan(0);
      });
  });
  it( 'should be able to get data from /reviews/meta', () => {
    return axios.get( 'http://localhost:8080/reviews/meta', { params: { product_id: 64620 } } )
      .then( ( results ) => {
        console.log('metadata:', results.data);
        expect(results.data.data.results.length).toBeGreaterThan(0);
      });
  });
  it( 'should be able to get data from /products/:${productId}/styles', () => {
    return axios.get( `http://localhost:8080/products/:64620/styles`, { params: { product_id: productId } } )
      .then( ( results ) => {
        console.log('styles:', results.data);
        expect(results.data.data.results.length).toBeGreaterThan(0);
      });
  });
  it( 'should be able to get data from /products/:${productId}', () => {
    return axios.get( `http://localhost:8080/products/:64620`, { params: { product_id: 64620 } } )
      .then( ( results ) => {
        console.log('product info:', results.data);
        expect(results.data.data.results.length).toBeGreaterThan(0);
      });
  });
});
