import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
	async model() {
		console.log('The books model hook just ran.');
		return await this.store.findAll('book');
	}
}