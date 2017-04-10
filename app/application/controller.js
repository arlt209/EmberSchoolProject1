import Ember from 'ember';

export default Ember.Controller.extend({
  title: 'chef Tracker',

  actions: {
      unAvailable(chef){
        Ember.set(chef, 'isAvailable', false);
      },
      isAvailable(chef){
        Ember.set(chef, 'isAvailable', true);
      }
  }


});
