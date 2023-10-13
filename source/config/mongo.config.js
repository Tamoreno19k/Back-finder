 const mongoose = require('mongoose');

const dbConnection = async() => {

try {
    await mongoose.connect(process.env.DB_URI, { 
        useNewUrlParser: true,
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