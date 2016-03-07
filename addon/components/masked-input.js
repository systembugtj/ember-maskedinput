import Ember from 'ember';

export default Ember.TextField.extend({
  mask: "9999 9999",
  tagName: "input",
  maskholder: "-",
  autoclear: false,
  
  didInsertElement() {
    this._super(...arguments);
    this.$().mask(this.get("mask"), { 
      placeholder: this.get("maskholder"),
      autoclear: this.get("autoclear"),
      completed: this.completed.bind(this)
    });
  },
  
  completed() {
    this.sendAction("inputReady");
  }
});
