(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	// Create a model to represent To-do List
	// An array of objects, with each object having two properties: "completed" (true/false)
	// "description" (string);
	function Item(){
		this.isCompleted = false;
		this.description = '';
	}

	//Function to count <li> items in <ul>
	function countsItems(number) {
		if(number == 1 ){
			$('.todo-count').html(number + ' item left');
		} else{
			$('.todo-count').html(number + ' items left');
		}
	}

	//Adds to list function
	var items = [];
	var itemsLeft = 0;

	var iItems = 0;
	var itemsCompleted = 0;
	var itemsNotCompleted = 0;


	$('#addItem').keypress(function (e) {
		var key = e.which;

		if(key == 13 && $('#addItem').val() != "") {// the enter key code

			console.log('Adds item');
			var item = {isCompleted:false, description:"no desc"};
			item.description = $('#addItem').val();
			items.push(item);
			$("#todo-list").append('<li><div class="view"> <input class="toggle" type="checkbox" > <label>' + item.description + '</label> <button class="destroy"> </button> </div> </li>');
			$('input[name = butAssignProd]').click();
			console.log('items has ' + items.length + ' elements');
			console.log(items);

			//adds items
			iItems += 1;
			countsItems(iItems);
			return false;

		} else {
			console.log('Cannot add item');
		}
	});

  $(document).on('click','.destroy',function(){
			var label = $(this).index();

			if (label > -1) {
				console.log('label ' + label);
			    items.splice(label, 1);
			}

			$(this).parent().parent().remove();
			$(this).parent().remove();
			$(this).closest().remove();

			//removes items
			iItems -= 1;
			countsItems(iItems);


			console.log('items has ' + items.length + ' elements');
			console.log(items);

  });

	$(document).on('click','.toggle',function(){


		if ($(this).closest('li').hasClass('completed')){

			$(this).closest('li').removeClass('completed');
			var label = $(this).index();
			console.log('LABEL: ' + label);
			items[label].isCompleted = false;
			console.log('Task #' + label + ' is completed? = ' + items[label].isCompleted);

		} else {
			$(this).closest('li').addClass('completed');
			var label = $(this).index();
			console.log('LABEL: ' + label + ' inner text ' + label.innerText);
			items[label].isCompleted = true;
			console.log('Task #' + label + ' is completed? = ' + items[label].isCompleted);
		}

		var remainingItems = iItems - $("#todo-list .completed").length;

		if(remainingItems ==  1){

			$('.todo-count').html(remainingItems + ' item left');

		} else {

			$('.todo-count').html(remainingItems + ' items left');

		}


	});

	// Filters
	// this function counts the number of total items, completed items and active
	// items and updates the number dinamically
	$("#filters li").click(function() {

		var index = $("#filters li").index(this);
		// console.log("Index " + index + " was clicked");

		//All
		if(index == 0){
			$('.todo-count').html(iItems  + ' items');

		} else if (index == 1) { //Active
			$('.todo-count').html(iItems - $("#todo-list .completed").length  + ' items left');

		} else { //completed
			$('.todo-count').html($("#todo-list .completed").length + ' items completed');
		}

	});


	$( document ).ready(function() {

		countsItems(iItems);

	});



})(window);
