//file that includes html routes for getting to the home and survey page

const path = require("path");

module.exports = function (app) {
    app.get('/', function(req, res) {
        res.sendFile(path.resolve("app/public/home.html"));
        
    });
    
    app.get('/survey', function(req, res) {
        res.sendFile(path.resolve("app/public/survey.html"));
    });
}