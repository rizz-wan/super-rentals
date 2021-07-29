import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class CollegeRoute extends Route {
  @service store;
  @service router;

  async model(params) {
    const record = this.store.peekRecord('college', params.college_id);
    if (!record) this.router.transitionTo('colleges');
    return hash({
      collegeDetail: record,
      similarColleges: this.store
        .peekAll('college')
        .filterBy('country', record.country)
        .filter((word) => word.name !== record.name),
    });
  }
}
