// sample(controller)
// app/controllers/user.js
import Ember from 'ember';
import User from 'my-awesome-ember-app/models/user';

export default Ember.Controller.extend({
  user: User.create({firstName: "John", lastName: "Doe"})
});
// end-sample

// sample(cp)
// app/models/user.js
import Ember from 'ember';

export default Ember.Object.extend({
  fullName: Ember.computed('firstName', 'lastName', function () {
    return [
      this.get('firstName'), this.get('lastName')
    ].join(',');
  })
});
// end-sample
