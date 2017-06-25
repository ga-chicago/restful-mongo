//the front end JS (currently used for ajax requests)
console.log('hello');

//on user click 'submit'
$('#submit').on('click', function(){
    //grab input field
    var name = $('#name').val() //.val() gives name that's in input
    var author = $('#author').val()
    var numberOfPages = $('#numberOfPages').val()
    var genre = $('#genre').val()
    var datePublished = $('#datePublished').val()
    //set as values for book keys
    var newBook = {
        name: name,             // js knows the ___: is a key so doesn't mix with variable
        author: author,
        numberOfPages: numberOfPages,
        genre: genre,
        datePublished: datePublished
    };
    //take object and use ajax to post it to /books
    $.ajax({                // sends post request to server, provides data we set with newBook
        method: "POST",
        url: "http://localhost:3000/books",  // could just do /books
        data: newBook,
        success: function(response){
            window.location.reload()
        }
    })
})
//when the delete button is clicked
$('.delete').on('click', function(){
    //we need to grab the id of the book that's being deleted
    var id = $(this).attr('id')     //way to grab current element clicked
    //send a delete via ajax to /books/:id
    $.ajax({
        method: "DELETE",
        url: "http://localhost:3000/books/" + id,
        success: function(){
            window.location.reload()
        }
    })
})
