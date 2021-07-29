import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class CollegesComponent extends Component {
  @tracked data = [];
  @service store;

  constructor() {
    super(...arguments);
    this.data = this.store.peekAll('college');
  }
}
