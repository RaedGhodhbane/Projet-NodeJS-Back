var express = require('express')
var bodyParser = require('body-parser')
var app= express()
var array=[{"id":1,"nom":"raed","prenom":"ghodhbane","age":26},
{"id":2,"nom":"maher","prenom":"chalghemi","age":33}]
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
app.use(bodyParser.json())

app.get('/', function(req,res){
    res.send('hello word')
})

app.get('/raed', function(req,res){
    res.send('ici raed')
})

app.get('/calcul/:x/:y', function(req,res){
    var i = parseInt(req.params.x)
    var j = parseInt(req.params.y)
    result = i+j
    res.send('la resultat = '+ result)
})

app.post('/add', function(req,res){
    
    res.send("vous avez ajoute Mr "+req.body.prenom)
})
app.get('/all' ,function(req,res){
    res.send(array)
})
const user = require('./Server/Routing/user')
app.use('/user',user)

app.get('/getbyname/:name' ,function(req,res){
    var obj = array.filter(element=> element.nom == req.params.name)
    if(obj.length == 0)
        res.send(req.params.name+" n'existe pas")
    else
        res.send(obj[0])
})

app.get('/getbyid/:id' , function(req,res) {
    var ele = array.filter(element=> element.id == req.params.id)
    res.send(ele[0])
  })

  app.get('/delete/:id' , function(req,res) {
    var ele = array.filter(element=> element.id != req.params.id)
    res.send(ele)
  })


app.listen(3000, err=> {console.log("le serveur est en marche sur le port 3000")});