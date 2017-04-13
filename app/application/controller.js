import Ember from 'ember';

export default Ember.Controller.extend({
  title: 'Chef Tracker',
  totalChefs: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model', 'isAvailable', true),
  getStudents: Ember.computed.mapBy('model', 'students'),
  totalStudents: Ember.computed.sum('getStudents'),



  actions: {
      unAvailable(chef){
        Ember.set(chef, 'isAvailable', false);
        chef.save();
      },
      isAvailable(chef){
        Ember.set(chef, 'isAvailable', true);
        chef.save();
      },
      saveNewChef(){
        this.store.createRecord('chef', {
          isAvailable: false,
          name: this.get('newChef')
        }).save();
        this.set('newChef', '');
      },
      deleteChef(chef){
        chef.destroyRecord();
      },
      addStudent(chef){
        chef.set('students', chef.get('students') + 1);
        chef.save();
      },
      removeStudent(chef){
        if (chef.get('students') > 0) {
          chef.set('students', chef.get('students') - 1);
        }
        chef.save();
      }
  }
});
