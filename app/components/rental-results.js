import Component from '@glimmer/component';

export default class RentalResultComponent extends Component {
  get isResultAvailable() {
    let { results } = this.args;

    return results.toArray().length ? true : false;
  }
}
