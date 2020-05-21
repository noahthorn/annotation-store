import Route from '@ember/routing/route';

export default class BooksPassagesRoute extends Route {
	async model(params) {
		console.log('The passages model hook ran on ' + params.book_id);
		let book = await this.store.findRecord('book', params.book_id, { include: 'passages' });
		console.log(book);
		return book; 
	}
}