import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | books/passages', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:books/passages');
    assert.ok(route);
  });
});
