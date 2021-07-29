import Model, { attr } from '@ember-data/model';

export default class AlbumModel extends Model {
  @attr name;
  @attr state;
  @attr country;
  @attr page;
  @attr state_province;
}
