import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, currentURL } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Footer />`);

    assert.dom(this.element).hasText('SuperRentals');
    assert.dom('.menu').exists();

    await click('.footer a h1');
    assert.equal(currentURL(), '/');
  });
});
