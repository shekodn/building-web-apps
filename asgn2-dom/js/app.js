(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	// Create a model to represent To-do List
	// An array of objects, with each object having two properties: "completed" (true/false)
	// "description" (string);
	// # of to-do items (that are not marked as completed)
	function Item(){
		this.isCompleted = false;
		this.description = '';
	}

	function List(){
		this.items = [];
	}


	//Adds to list function
	// reference: http://jsfiddle.net/Gmyag/

	var list = document.getElementById('todo-list');

	function addsToList() {
    var todoItem = document.getElementById('todoItem').value;
    // document.getElementById('boldStuff2').innerHTML = firstname;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(todoItem));
    list.appendChild(entry);
}



})(window);
