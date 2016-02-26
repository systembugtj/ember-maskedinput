import Ember from 'ember';
import layout from '../templates/components/masked-input';

export default Ember.TextField.extend({
  
  mask: "9999 9999",
  tagName: "input",
  placeholder: "-",
  autoclear: false,
  
  didInsertElement() {
    this.$().mask(this.get("mask"), { 
      placeholder: this.get("placeholder"),
      autoclear: this.get("autoclear"),
      completed: this.completed.bind(this)
    });
  },
  
  completed() {
    this.sendAction("inputReady");
  }
});
