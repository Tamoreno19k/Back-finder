require('dotenv').config();
const 

      express = require('express'),
      app = express(),
      PORT = process.env.PORT || 4000, 
      cors = require('cors'),
      { dbConnection } = require('./config/mongo.config.js')

app.use( cors() );

dbConnection();

app.get('/', function(req, res){
        res.send(' <h1>HOME</h1> ');
})

app.get('/user', function(req, res){
        const Tania = {
            name:'Tania Medina', 
            professoion: 'Estudiante',      
    } 
    res.json(Tania)
})

app.listen(PORT, () => {
    console.log(`servidor express launching en el puerto ${PORT}`);
},);