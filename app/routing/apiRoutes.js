
var friends = require('../data/friends.js');

module.exports = function(app){
	app.get("/api/friends", function(req, res){
    	return res.json(friends);
	});

	app.post("/api/friends", function(req, res){
		var newFriend = req.body;
		console.log(newFriend);

		friends.push(newFriend);

		var bestie = friends[0];
		var bestDiff = 1000;
		var newFriendScore = newFriend.responses;


		for(var i = 0; i < friends.length - 1; i++){
			var compScore = friends[i].responses;
			var currentDiff = 0; 
			
			for(var j = 0; j < compScore.length; j++){
				currentDiff += Math.abs(compScore[j] - newFriendScore[j]);
			}

			if(currentDiff < bestDiff){
				bestDiff = currentDiff;
				bestie = friends[i];
			}
		}

		res.json(bestie);
	});

}