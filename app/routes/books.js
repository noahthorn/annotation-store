import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
	model() {
		console.log('The books model hook just ran.');
		return this.store.findAll('book');
	}
}