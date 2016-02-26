import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('masked-input', 'Integration | Component | masked input', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{mask-input}}`);

  assert.equal(this.$().text().trim(), '', "shoul render with yields");
});
