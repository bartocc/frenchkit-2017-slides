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
  this.post('/products'); // HTTP status 201
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
  this.get('/api/authors'); // HTTP status 200
  this.put('/api/authors/:id'); // HTTP status 204
  this.del('/posts/:id'); // HTTP status 204
};
// end-sample

// sample(default)
// app/mirage/scenarios/default.js
export default function(server) {
  let author = server.create('author');
  server.createList('post', 10, {author});
}
// end-sample

// sample(acc1)
// app/mirage/config.js
test('I can view the photos', function() {
  server.createList('photo', 10);

  visit('/');

  andThen(() => {
    equal( find('img').length, 10 );
  });
});
// end-sample
