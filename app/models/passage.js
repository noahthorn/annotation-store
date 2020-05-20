import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PassageModel extends Model {
	@attr text;
	@attr location;

	@belongsTo book;

	@hasMany annotations;
}