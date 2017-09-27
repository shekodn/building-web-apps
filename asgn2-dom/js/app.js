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
	// var foodList = [];

	$(function(){

			$('#addItem').keypress(function (e) {
				var key = e.which;

				if(key == 13 && $('#addItem').val() != "") {// the enter key code
					console.log('Adds item');
					var item = {isCompleted:false, description:"no desc"};
					item.description = $('#addItem').val();
					$("#todo-list").append('<li><div class="view"> <input class="toggle" type="checkbox" > <label>' + item.description + '</label> <button class="destroy"> </button> </div> </li>');
					$('input[name = butAssignProd]').click();
					console.log('FALSE');

					return false;
				} else {
					console.log('Cannot add item');
				}
			});

	    $(document).on('click','.destroy',function(){
	        $(this).parent().remove();
	    });

			$(document).on('click','.toggle',function(){
				console.log('check');

				$(this).closest('li').toggleClass('completed');

			});

	});




})(window);
