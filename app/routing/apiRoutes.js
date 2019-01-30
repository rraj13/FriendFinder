//external api routes file that includes a 
//get route to display all friends
//and a post route to handle incoming friend data
const friends = require("../data/friends")

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;

        friends.push(newFriend);

        res.json(newFriend);
    
    });
      
}