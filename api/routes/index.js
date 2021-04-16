const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(pessoas) /*intermediário para o express*/
    app.get('/', (req, res)=>res.send('bonassera'))
}