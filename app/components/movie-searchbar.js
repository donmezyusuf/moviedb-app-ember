import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { set } from '@ember/object';

const url = "https://api.themoviedb.org/3/search/movie?api_key=600f840105786dea284df9a5b0c4d971&language=en-US&query=";

export default class MovieSearchbarComponent extends Component {
  @tracked text = "";
  @service router;
  @service store;

  @action
  async routeMovie() {
    let response = await fetch(url + this.text);
    let result = await response.json();
    console.log(result.results);
    /*
    this.store.push({
      data: result.results
    });
     */
    this.router.transitionTo('searchresult');
  }

  @action
  bind(){
    console.log(this.text);
  }
}
