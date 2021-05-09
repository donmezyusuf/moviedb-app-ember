import Route from '@ember/routing/route';
import { action } from '@ember/object';
import fetch from 'fetch';

const url = "https://api.themoviedb.org/3/movie/popular?api_key=600f840105786dea284df9a5b0c4d971&language=en-US&page=1";

export default class MoviesRoute extends Route {
  async model() {
    let response = await fetch(url);
    let result = await response.json();
    console.log(result.results);
    return result.results;
  }

}
