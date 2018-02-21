const tables = require('../data/tableData.js')
console.log(tables)
const waitList = require('../data/waitListData.js')
console.log(waitList)

module.exports = function(app){
    app.get('/api/tables', function(req,res){
        res.json(tables)
    })
    app.get('/api/waitlist', function(req,res){
        res.json(waitList)
    })
} 