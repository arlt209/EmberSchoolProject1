import Ember from 'ember';

export default Ember.Controller.extend({
  title: 'Chef Tracker',
  newChef: null,
  menuLength: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model', 'isAvailable', true),

  actions: {
      unAvailable(chef){
        Ember.set(chef, 'isAvailable', false);
        chef.save();
      },
      isAvailable(chef){
        Ember.set(chef, 'isAvailable', true);
        chef.save();
      },
      saveNewChef(newChef){
        this.store.createRecord('chef', {
          isAvailable: false,
          name: this.get('newChef')
        }).save();
        this.set('newChef', '');
      },
      deleteChef(chef){
        chef.destroyRecord();
      }

  }


});
