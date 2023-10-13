 const mongoose = require('mongoose');

const dbConnection = async() => {

try {
    await mongoose.connect('mongodb://127.0.0.1:27017', { // mongodb://localhost:27017 mongodb://127.0.0.1:27017
        useNewUrlParser: true,
        //mongodb://username:password@hostname:port/database

        UseUnifiedTopology: true
    });    

    console.log('BD inicializada correctamente');
} 
catch (error) {
    console.error(error);
    throw new Error ('Error al inicializar la base de datos')
}
}

module.exports = {

    dbConnection
};