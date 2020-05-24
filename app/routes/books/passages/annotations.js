import Route from '@ember/routing/route';

export default class BooksPassagesAnnotationsRoute extends Route {
	async model(params) {
		console.log('The annotations model hook just ran on ' + params.passage_id);
		let passage = await this.store.findRecord('passage', params.passage_id, { include: 'annotations' });
		return passage;
	}

	// Use books controller for hover box
	renderTemplate(controller, model) {
		let booksController = this.controllerFor('books');
		this.render('books.passages.annotations', {
			controller: booksController
		});
	}
}