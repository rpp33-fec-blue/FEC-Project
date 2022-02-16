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
        console.log('related:', results.data.data);
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
  it( 'should be able to get data from /cart', () => {
    return axios.get( 'http://localhost:8080/cart' )
      .then( ( results ) => {
        console.log(results.data)
        expect(results.data.data).not.toEqual(undefined);
      });
  });
});

describe( 'API POST', () => {
  it( 'should post a question', ( ) => {
    var newQuestion = { 'body': 'testquestiontesttesttesttesttesttesttest12312312312312312312asasfasdfasfdsadfasf', 'name': 'joe', 'email': 'test@gmail.com', 'product_id': 64620 };

    const urlToPost = new URL("http://localhost:8080/qa/questions");
    // urlToPost.searchParams.append("body", newQuestion.body );
    // urlToPost.searchParams.append("name", newQuestion.name );
    // urlToPost.searchParams.append("email", newQuestion.email );
    // urlToPost.searchParams.append("product_id", newQuestion.product_id );
    // console.log(urlToPost.href)

    return axios.post( urlToPost.href, newQuestion )
      .then( ( results ) => {
        expect(results.status).toBe(200);
      })
      .catch( ( error ) => {
        console.log('error:', error);
      });
  });
  it( 'should post an item to the cart', ( ) => {
    var item = { 'sku_id': 2313108, 'count': 1 };

    return axios.post( 'http://localhost:8080/cart', item )
      .then( ( results ) => {
        console.log('success:', results.status);
        expect(results.status).toBe(200);
      })
      .catch( ( error ) => {
        console.log('error:', error);
      });
  });
});

describe( 'API PUT', ( ) => {
  it( 'should update the helpfullness of the question', ( ) => {
    return axios.put( 'http://localhost:8080/qa/questions/563775/helpful' )
      .then( ( results ) => {
        expect(results.status).toBe(200);
    });
  });
  it( 'should update the helpfullness of the review', ( ) => {
    return axios.put( 'http://localhost:8080/reviews/1135493/helpful' )
      .then( ( results ) => {
        expect(results.status).toBe(200);
    });
  });
});