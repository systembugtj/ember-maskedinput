import Ember from 'ember';
import layout from '../templates/components/masked-input';

export default Ember.Component.extend({
  layout: layout,
  mask: "9999 9999",
  tagName: "input",
  placeholder: "",
  
  didInsertElement() {
    this.$().mask(this.get("mask"), {placeholder: this.get("placeholder")});
  }
  
});
