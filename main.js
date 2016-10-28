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

			this.listItem.classList.add('note');
			this.actions.classList.add('actions');
			this.actions.removeButton.add('remove', 'icon-cancel');
			this.actions.likeButton.add('like', 'icon-heart');

			if (note.data.liked) {
				this.likeButton.classList.add('liked');
			}

			addAsFirstChild(elements.noteList, this.listItem);
			elements.noNotesFound.classList.add('hidden');
			return this;

		};

		this.like = function() {
			note.like();
			that.likeButton.classList.toggle('liked');
		};

		this.remove = function() {
			elements.noteList.removeChild(that.listItem);
			note.remove();
			if (elements.noteList.childElementCount === 0) {
				elements.noNotesFound.classList.remove('hidden');
			}
		};

		this.attachEvents = function() {
			this.likeButton.addEventListener('click', this.like);
			this.removeButton.addEventListener('click', this.remove);

		};

		this.init = function() {
			this.render();
			this.attachEvents();
			return this;
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

	var initialRender = function() {

		if (('notes' in localStorage) && (JSON.parse(localStorage.getItem('notes')).length > 0)) {

			notes = JSON.parse(localStorage.getItem('notes')).slice();

			var i = 0,
				len = notes.length,
				loadedNote;

			for (i; i < len; i += 1) {
				loadedNote = new Model(notes[i], notes);
				new View(loadedNote, elements.noteList).init();
			}

		} else {
			elements.noNotesFound.classList.remove('hidden');
		}
	};

})();