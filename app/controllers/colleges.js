import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CollegesController extends Controller {
  @service store;

  get isDataLoading() {
    return this.store.peekAll('college').toArray().length <= 1;
  }
}
