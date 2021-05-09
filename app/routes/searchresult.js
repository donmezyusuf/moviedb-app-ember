import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SearchResultRoute extends Route {
  @service store;

  model() {
    console.log(this.store.findAll('result.results'));
    return true;
  }
}
