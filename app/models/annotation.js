import Model, { attr, belongsTo } from '@ember-data/model';

export default class AnnotationModel extends Model {
	@attr text;

	@belongsTo passage;
}
