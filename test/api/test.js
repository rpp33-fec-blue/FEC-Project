const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const axios = require('axios');

describe( 'API GET', () => {
  it( 'should be able to get data from /qa/questions', () => {
    return axios.get( 'http://localhost:8080/qa/questions', { params: { product_id: 64620, count: 1000 } } )
      .then( ( results ) => {
        expect(results.data.data.results.length).toBeGreaterThan(0);
      });
  });
  it( 'should be able to get data from /products/:${productId}/related', () => {
    return axios.get( 'http://localhost:8080/products/64620/related', { params: { product_id: 64620 } } )
      .then( ( results ) => {
        expect(results.data.data.length).toBeGreaterThan(0);
      });
  });
  it( 'should be able to get data from /reviews', () => {
    return axios.get( 'http://localhost:8080/reviews', { params: { product_id: 64620, count: 1000 } } )
      .then( ( results ) => {
        expect(results.data.data.results.length).toBeGreaterThan(0);
      });
  });
  it( 'should be able to get data from /reviews/meta', () => {
    return axios.get( 'http://localhost:8080/reviews/meta', { params: { product_id: 64620 } } )
      .then( ( results ) => {
        expect(results.data.data.product_id).toEqual('64620');
      });
  });
  it( 'should be able to get data from /products/:${productId}/styles', () => {
    return axios.get( `http://localhost:8080/products/64620/styles`, { params: { product_id: 64620 } } )
      .then( ( results ) => {
        expect(results.data.data.product_id).toEqual('64620');
      });
  });
  it( 'should be able to get data from /products/:${productId}', () => {
    return axios.get( `http://localhost:8080/products/64620`, { params: { product_id: 64620 } } )
      .then( ( results ) => {
        expect(results.data.data.id).toEqual(64620);
      });
  });
});

describe( 'API POST', () => {
  it( 'should post a question', () => {
    var newQuestion = { 'body': 'test question test test test test test', 'name': 'joe', 'email': 'test@gmail.com', 'product_id': 64620 };
    $.ajax({
      url: '/qa/questions',
      method: 'POST',
      data: newQuestion,
      success: (results) => {
        console.log(results);
      }
    });

    // return axios({
    //   method: 'post',
    //   url: 'http://localhost:8080/qa/questions',
    //   data: newQuestion
    // })
    // .then( ( result ) => {
    //   console.log(result);
    //   expect(results).not.toEqual(undefined);
    // });
  });
})