// sample(timing)
// app/mirage/config.js
export default function() {

  // Simulate a slow response from the server
  this.post('/authors', { timing: 1500 });
};
// end-sample

// sample(endpoints)
// app/mirage/config.js
export default function() {
  this.post('/authors'); // HTTP status 201
  this.get('/authors'); // HTTP status 200
  this.put('/authors/:id'); // HTTP status 204
  this.del('/authors/:id'); // HTTP status 204
};
// end-sample

// sample(factories)
// app/mirage/factories/author.js
import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  email() {return faker.internet.email(); },
  firstName() {return faker.name.firstName(); },
  lastName() {return faker.name.lastName(); },
  avatar() {return faker.image.avatar();; },
});
// end-sample

// sample(models)
// app/mirage/models/post.js
import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo()
});
// end-sample

// sample(default)
// app/mirage/scenarios/default.js
export default function(server) {
  // creates 1 author in the DB
  let author = server.create('author');

  // creates 10 posts belonging to the author
  server.createList('post', 10, {author});
}
// end-sample

// sample(acc1)
// app/tests/acceptance/authors-test.js
test('I can view the authors', function() {
  server.createList('author', 10);

  visit('/authors');

  andThen(() => {
    equal( find('img.avatar').length, 10 );
  });
});
// end-sample

// sample(route)
// app/posts/route.js
import Ember from 'ember';

export default Ember.Route.extends({
  model() {
    return this.store.findAll('post');
  }
});
// end-sample
