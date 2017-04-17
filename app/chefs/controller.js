import Ember from 'ember';

export default Ember.Controller.extend({
      title: 'Chef Tracker',
  availableChefs: Ember.computed.filterBy('model', 'isAvailable', true),
  chefStudents: Ember.computed.mapBy('model', 'students'),
  totalStudents: Ember.computed.sum('chefStudents'),


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
        console.log('add student');
      },
      removeStudent(chef){
        chef.set('students', chef.get('students') - 1);
        console.log('remove student');
      }
  }
});
