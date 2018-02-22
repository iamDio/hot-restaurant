const path = require('path')


// module.exports=  function(app){
//     app.get('/', function(req,res){
//         res.sendFile(path.join(__dirname,'../public/index.html'))
//     })
//     app.get('/reservation',function(req,res){
//         res.sendFile(path.join(__dirname,'../public/reservation.html'))
//     })
//     app.get('/waitlist', function(req,res){
//         res.sendFile(path.join(__dirname,'../public/waitList.html'))
//     })
// }


module.exports = function(app){
    app.get('/:endpoint?',function(req,res){
        switch(req.params.endpoint){
            case undefined:
            case '/':
                res.sendFile(path.join(__dirname,'../public/index.html'))
                break
            case 'reservation':
        res.sendFile(path.join(__dirname,'../public/reservation.html'))
                break
            case 'waitList':
                res.sendFile(path.join(__dirname,'../public/waitlist.html'))
                break
            default:
                res.status(404).send('404 not found');
            break
        }
    })
}