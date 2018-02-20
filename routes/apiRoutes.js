const path = require('path');

module.exports = function(app){
    app.get('/api/waitlist', function(req,res){
        res.sendFile(__dirname(path('../tableData.js')))
    })
}