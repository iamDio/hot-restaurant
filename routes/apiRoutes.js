const tables = require('../data/tableData.js')
console.log(tables)
const waitList = require('../data/waitListData.js')
console.log(waitList)

// module.exports = function(app){
//     app.get('/api/tables', function(req,res){
//         res.json(tables)
//     })
//     app.get('/api/waitlist', function(req,res){
//         res.json(waitList)
//     })
// } 

module.exports = function(app){
    app.get('/api/:endpoint?',function(req,res){
        switch(req.params.endpoint){
            case 'tables':
                res.json(tables)
                break
            case 'waitlist':
                res.json(waitList)
                break
            default:
                res.send('404 not found')
        }
    })

    app.post('/api/tables',function(req,res){
        if(tables.length<5){
            tables.push(req.body);
            res.json(true)
        }else{
            waitList.push(req.body);
            res.json(false)
        }
    })
    app.post('/api/clear', function(){
        tables=[];
        waitList=[];
    })

}