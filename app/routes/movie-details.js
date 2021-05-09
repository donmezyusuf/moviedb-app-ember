import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default class MovieDetailsRoute extends Route {
  @service store;
  @service router;

  async model(params) {
    console.log(params);
    console.log(this.store.findAll('movies'));
  }
}
