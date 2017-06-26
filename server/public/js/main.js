console.log('hello');

//goal: ajax post it to the server and the server will put it in the database

//on click of submit button, 
$('#submit').on('click', function(){
	//grab whatever is in each input field
	var name = $('#name').val();
	var type = $('#type').val();
	var vegetarian = $('#vegetarian').val();
	var cost = $('#cost').val();
	//build an object with the corresponding keys
	var newSushi = 	{name: name, 
					type: type, 
					vegetarian: vegetarian, 
					cost: cost};
	//take the object and post it to /wines
	$.ajax({
		method: "POST",
		url: 'http://localhost:3000/sushi',
		data: newSushi,
		success: function(response){
			window.location.reload();
		}
	})
});

//when the delete button is clicked
	//we need to grab the id of the wine that's being deleted
	//send a delete via ajax to /sushi/:id

$('.delete').on('click', function(){
	//we need to grab the id of the wine that's being deleted
	var id = $(this).attr('id');
	//send a delete via ajax to /wines/id
	$.ajax({
		method: "DELETE",
		url: 'http://localhost:3000/sushi' + id,
		success: function(response){
			window.location.reload();

		}
	})
});