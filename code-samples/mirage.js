// sample(s1)
// app/mirage/config.js
export default function() {

  this.namespace = '/api';

  // this route will handle a POST request
  // to the URL '/api/products'
  this.post('/products');
};
// end-sample

// sample(s2)
var foo = "bar"
// end-sample
