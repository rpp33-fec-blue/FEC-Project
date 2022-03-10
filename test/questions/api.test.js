var { JSDOM } = require( "jsdom" );
var { window } = new JSDOM( "" );
var $ = require( "jquery" )( window );

describe('server prefilter function', () => {

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


