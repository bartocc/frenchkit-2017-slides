// sample(post)
// app/mirage/config.js
export default function() {
  // this route will handle a POST request
  // to the URL '/products'
  this.post('/products');
};
// end-sample

// sample(namespace)
// app/mirage/config.js
export default function() {
  this.namespace = '/api';

  // this route will handle a POST request
  // to the URL '/api/products'
  this.post('/products');
};
// end-sample

// sample(timing)
// app/mirage/config.js
export default function() {

  // Simulate a slow response from the server
  this.post('/users', { timing: 1500 });
};
// end-sample

// sample(rest)
// app/mirage/config.js
export default function() {

  // Define different
  this.get('/api/authors');
  this.put('/api/authors/:id');
  this.del('/posts/:id');
};
// end-sample
