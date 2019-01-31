//external api routes file that includes a 
//get route to display all friends
//and a post route to handle incoming friend data
const friends = require("../data/friends")

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        let newFriend = req.body;
        let totalDifferenceValues = [];

        for (let i = 0; i < friends.length; i++) {
            let comp = friends[i].scores;
            let totalDifference = 0;

            for (let i = 0; i < newFriend.scores.length; i++) {
                totalDifference += Math.abs(comp[i] - newFriend.scores[i]);
            }

            totalDifferenceValues.push(totalDifference);

        }

        let totalDifferenceComp = totalDifferenceValues[0];
        
        for (let i = 0; i < totalDifferenceValues.length; i++) {

            if (totalDifferenceValues[i] < totalDifferenceComp) {
                totalDifferenceComp = totalDifferenceValues[i];
            }

        }

        let indexofMatch = totalDifferenceValues.indexOf(totalDifferenceComp);

        let match = friends[indexofMatch];

        friends.push(newFriend);

        res.json(match);
    
    });
      
}