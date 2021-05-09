import Model from '@ember-data/model';

export default class MovieSearchbarModel extends Model {
  model(params) {
    console.log(params[0]);
  }
}
