import Controller from '@ember/controller';
import { computed, action } from '@ember/object'

export default class BooksController extends Controller {
	isOpen = true

	prevBox = null

	@action
	toggle() {
		this.toggleProperty('isOpen');
	}

	@action
	helpButton() {
		let helpPop = document.body.querySelector('#help-pop');
		helpPop.classList.toggle('hide');
	}

	@action
	selectPassage(passage_id) {
		if (this.prevBox != null) {
			this.prevBox.classList.toggle('hide');
		}

		// display box logic
		let pairOutlet = document.body.querySelector("#outlet-" + passage_id);
		pairOutlet.previousElementSibling.classList.add('relative');
		pairOutlet.classList.toggle('hide');

		// set this outlet to global variable
		this.set('prevBox', pairOutlet);

		// move to annotations route
		this.transitionToRoute('books.passages.annotations', passage_id);
	}
}