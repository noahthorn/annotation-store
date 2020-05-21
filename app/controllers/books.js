import Controller from '@ember/controller';
import { computed, action } from '@ember/object'

export default class BooksController extends Controller {
	isOpen = true

	@action
	toggle() {
		this.toggleProperty('isOpen');
	}
}