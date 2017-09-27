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
		
	var foodList = [];

	$(function(){

			$('#addFood').keypress(function (e) {
				var key = e.which;

				if(key == 13) {// the enter key code
					console.log('Adds item');
					$("#todo-list").append('<li><div class="view"> <input class="toggle" type="checkbox" checked="false"> <label>' + $('#addFood').val() + '</label> <button class="destroy"> </button> </div> </li>');
					$('input[name = butAssignProd]').click();
					console.log('FALSE');

					return false;
				}
			});

	    $(document).on('click','.item',function(){
	        $(this).parent().remove();
	    });
	});




})(window);
