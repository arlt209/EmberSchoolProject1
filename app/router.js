import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('training');
  this.route('chefs', function(){
    this.route('chef', {path: ':chef_id'});
  });
});

export default Router;
