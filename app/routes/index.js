import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const movie = "https://api.themoviedb.org/3/movie/43539?api_key=600f840105786dea284df9a5b0c4d971&language=en-US";
const url = "https://api.themoviedb.org/3/movie/popular?api_key=600f840105786dea284df9a5b0c4d971&language=en-US&page=1";
export default class IndexRoute extends Route {
  @service store;

  async model() {
    let response = await fetch(url);
    let result = await response.json();
    const {movies} = result.results;
    return movies;
  }
}
