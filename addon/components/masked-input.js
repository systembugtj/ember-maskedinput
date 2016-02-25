import Ember from 'ember';
import layout from '../templates/components/masked-input';

export default Ember.Component.extend({
  layout: layout
  
  didInsertElement() {
    let $input = this.$("input");
    
  }
});
