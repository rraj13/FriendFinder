//file that includes html routes for getting to the home and survey page

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.sendFile("/Users/rahulraj/Desktop/FriendFinder/app/public/home.html"); 
    });
    
    app.get('/survey', function(req, res) {
        res.sendFile("/Users/rahulraj/Desktop/FriendFinder/app/public/survey.html")
    });
}
