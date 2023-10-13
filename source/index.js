require('dotenv').config();
const 

      express = require('express'),
      app = express(),
      PORT = process.env.PORT || 4000, 
      cors = require('cors'),
      { dbConnection } = require('./config/mongo.config.js')

app.use( cors() );

dbConnection();

// Rutas

app.use('/api/auth', require('./routes/auth.routes.js')); // http://localhost:4001/api/auth
app.use('/api/settings', require('./routes/settings.routes.js')); // http://localhost:4001/api/settings

//lanza servidor en: //http:locaclhost:4001

app.listen(PORT, () => {
    console.log(`servidor express launching en el puerto ${PORT}`);
},);