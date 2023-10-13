//** Rutas de modulo de autenticacion */

const { Router } = require('express');

const router = Router();
// aqui estan definidas las rutas del modulo de settings 
//http://localhost/4001:api/auth/  va con la barra al final segun lode abajo

router.get('/', (req, res) => {
    res.json({
        
        id: 1233905235,
        Username: 'tamedina19k',
        password: 'test*****',
        correo: 'moredinatm@gmail.com',
        security: [{
            twostepverfications: true
        }],

    });
})

module.exports = router;