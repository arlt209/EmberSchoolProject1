import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  isAvailable: DS.attr('boolean'),
  students: DS.attr('number'),
  description: DS.attr('string')
});
