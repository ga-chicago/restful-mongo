var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	path = require('path'),
	bodyParser = require('body-parser'),
	Teams = require('./models/Teams');

	//connect to database
	 require('./db/db')

	 //connect to public pages
	 app.use(express.static(path.join(__dirname, 'public')));

	 //enable views with handlebars engine
	 app.set('views', path.join(__dirname, 'views'));
	 app.set('view engine', 'hbs');
	 //simulate user input
	 app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
  Teams.find(function(err, teams){
    var allTeams = {teams: teams};
    console.log(allTeams);
    response.render('home', allTeams);
  })
});

app.get('/teams', function(request, response){
  //return all the teams to teams page
  Teams.find(function(err, teams){
    console.log(teams);
    response.json(teams);
  });
})

app.get('/teams/:id', function(request, response){
  //return a specific team by id
  var id = request.params.id;
  Teams.findById(id, function(err, team){
    console.log(err);
    response.json(team);
  })
})

app.post('/teams', function(request, response){
  //create a new team from the request body params
  console.log(request.body);
  var teams = new Teams({name: request.body.name,
                      city: request.body.city,
                      conference: request.body.conference,
                      division: request.body.division,
                      standing: request.body.standing})
  teams.save();
  response.send("success");

  
})

app.patch('/teams/:id', function(request, response){
  //update a team by id with the request body param
  var id = request.params.id;
  Teams.findById(id, function(err, teams){
    teams.name = request.body.name;
    teams.city = request.body.city;
    teams.conference = request.body.conference;
    teams.division = request.body.division;
    teams.standing = request.body.standing;
    teams.save();
    response.json(teams);
  })
})

app.delete('/teams/:id', function(request, response){
  //delete the team by id
  var id = request.params.id;
  Teams.findById(id, function(err, teams){
    teams.remove();
    response.json("success");
  })
})


	server.listen(3000, function(){

		console.log("listening on port 3000");
	})