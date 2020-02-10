const express  = require('express')
const path = require('path');

const app = express();
app.use('/', express.static(path.join(__dirname, 'assets')))
// app.use(express.static('assets'))
app.use(express.static('landingpage'))
app.use(express.static('fonts'))
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./landingpage/landingpage.html'))
})
app.listen(3000)