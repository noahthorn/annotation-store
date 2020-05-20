import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
	title() {
		return faker.lorem.words();
	},
	author() {
		return faker.name.findName();
	},
	slug(i) {
		return 'book-' + i;
	},
	afterCreate(book, server) {
		server.createList('passage', 5, { book });
	}
});