import Route from '@ember/routing/route';

export default class BooksPassagesAnnotationsRoute extends Route {
	model(params) {
		console.log('The annotations model hook just ran on ' + params.passage_id);
		let passage = this.store.findRecord('passage', params.passage_id, { include: 'annotations' });
		return passage;
	}
}