const path = require('path')


module.exports=  function(app){
    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname,'../public/index.html'))
    })
    app.get('/reservation',function(req,res){
        res.sendFile(path.join(__dirname,'../public/reservation.html'))
    })
    app.get('/waitlist', function(req,res){
        res.sendFile(path.join(__dirname,'../public/waitList.html'))
    })
}


