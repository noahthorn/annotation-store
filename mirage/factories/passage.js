import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
	text() {
		return faker.lorem.paragraph();
	},
	location() {
		return faker.random.number();
	},
	afterCreate(passage, server) {
		server.createList('annotation', 3, { passage });
	}
});