import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('books', { path: '/books' }, function() {
    this.route('passages', { path: '/:book_id' }, function() {
      this.route('annotations', { path: '/:passage_id' });;
    });
  });
  this.route('redirect', { path: '/' });
});