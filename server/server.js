require("dotenv").config();
let express = require("express")
let app = express()
let port = process.env.port || 3001

let axios = require("axios") 
var apikey = process.env.KEY

//Initialize Express
app.use(express.static("client/public"));

//allow the api to be accessed by other apps
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  next();
});


app.get("/getCurrentWeather/:zip",function(req,res) {
	
	let fiveDayURL = "http://api.apixu.com/v1/forecast.json?key="+apikey+"&q="+req.params.zip+"&days=5"
	//console.log(fiveDayURL)

	axios.get(fiveDayURL).then(function(response) {

		//console.log(response.data)
		res.json(response.data)

	}).catch(function (error) {
    
	    // handle error
	    //console.log("ERROR:   "+error.response.data.error.message);
	    let err = error.response.data.error.message
	    res.json({error:err})

	  })

})

//Listening to port
app.listen(port, function() {
  console.log("Server running on port "+port+"!");
});