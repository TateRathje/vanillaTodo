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

	var Model = function(noteData, collection) {

		this.data = noteData;

		this.save = function() {
			collection.push(this.data);
		};

		this.like = function() {

		};

		this.remove = function () {
			
		}

	};



})();