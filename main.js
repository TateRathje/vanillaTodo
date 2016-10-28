var app = app || {};

app.main = (function() {

	var elements = {
		noteField: document.querySelector('.write-note'),
		noteSubmit: document.querySelector('.submit-note'),
		noteList: document.querySelector('.notes'),
		noNotesFound: document.querySelector('.no-notes-found')
	};

	var notes = [];

	var attachEvents = function() {

	};

	var addAsFirstChild = function(parent, child) {
		var parentNode = parent,
			childNode = child;
		if (parentNode.firstChild) {
			parentNode.insertBefore(child, parent.firstChild);
		} else {
			parentNode.appendChild(child);
		}
	};

	var View = function(note, containerEl) {

		var index = notes.indexOf(note),
			that = this;

		this.render = function() {
			
			this.listItem = document.createElement('li');
			this.paragraph = document.createElement('p');
			this.actions = document.createElement('ul');
			this.removeButton = document.createElement('li');
			this.likeButton = document.createElement('li');

		};

		this.like = function() {
			// body...
		};

		this.remove = function() {
			// body...
		};

		this.attachEvents = function() {
			// body...
		};

		this.init = function() {
			// body...
		};

	};

	var Model = function(noteData, collection) {

		/*noteData = {
			noteBodyText: 'blah blah',
			liked: false
		}*/

		this.data = noteData;

		this.save = function() {
			collection.push(this.data);
			localStorage.setItem('notes', JSON.stringify(collection));
			return this;
		};

		this.like = function() {
			this.data.liked = !this.data.liked;
			var indexToUpdate = collection.indexOf(this.data);
			collection.splice(indexToUpdate, 1, this.data);
			localStorage.setItem('notes', JSON.stringify(collection));
			return this;
		};

		this.remove = function() {
			var indexToRemove = collection.indexOf(this.data);
			collection.splice(indexToRemove, 1);
			localStorage.setItem('notes', JSON.stringify(collection));
			return this;
		};

	};



})();