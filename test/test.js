const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

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

