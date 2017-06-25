console.log("hello");

$('#submit').on('click', function(){

	var name = $('#name').val();
	var region = $('#region').val();
	var words = $('#words').val();
	var sigil = $('#sigil').val();
	var hasDragons = $('#hasDragons').val();

	var newHouse = {name: name,
					region: region,
					words: words,
					sigil: sigil,
					hasDragons: hasDragons};
		console.log(newHouse);

	$.ajax({
		method: "POST",
		url: "http://localhost:3000/houses",
		data: newHouse,
		success: function(response){
			window.location.reload();
		}
	});
});

$('.delete').on('click', function(){
	var id = $(this).attr('id');
	$.ajax({
		method:"DELETE",
		url: "http://localhost:3000/houses/" + id,
		success: function(response){
			window.location.reload();
		}
	})
})