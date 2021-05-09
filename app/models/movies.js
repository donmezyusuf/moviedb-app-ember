import Model, { attr } from '@ember-data/model';

export default class MoviesModel extends Model {
  @attr('boolean') adult;
  @attr backdrop_path;
  @attr genre_ids;
  @attr('number') id;
  @attr('string') original_language;
  @attr('string') original_title;
  @attr overview;
  @attr('number') popularity;
  @attr('string') poster_path;
  @attr release_date;
  @attr('string') title;
  @attr video;
  @attr vote_average;
  @attr vote_count;
}
