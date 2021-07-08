import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalsComponent extends Component {
  @tracked query = '';
  @tracked isButtonDisabled = this.query.length <= 0;

  @action clearQuery() {
    this.query = '';
    this.updateButtonState();
  }

  @action updateButtonState() {
    this.isButtonDisabled = this.query.length <= 0;
  }
}
