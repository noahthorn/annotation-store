import Model, { attr, hasMany } from '@ember-data/model';

export default class BookModel extends Model {
	@attr title;
	@attr author;
	// Default function only runs if no value is supplied. 
	// Slug will be handled on backend.
	@attr('string') slug;

	@hasMany('passage') passages;
}