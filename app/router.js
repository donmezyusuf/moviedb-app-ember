import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });
  this.route('rental', { path: '/rentals/:rental_id' });
  this.route('movies');
  this.route('movie-details', function(){
    this.route('id', { path: '/:movie_id' });
  });
  this.route('searchresult');
});

//, function(){
//     this.route('id', { path: '/:movie_id' });
//   }

/*
 this.route('movie-details', { path: '/movie-details/:movie_id'});

  this.route('movie-details', function(){
    this.route('id', { path: '/:movie_id' });
  })
 */
