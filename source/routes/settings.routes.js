//** Rutas de modulo de settings */

const { Router } = require('express');

const router = Router();

// aqui estan definidas las rutas del modulo de settings 
//http://localhost/4001:api/settings/  va con la barra al final segun lode abajo

router.get('/', (req, res) => {
        res.json({
            Cel: 3058129508,
            address: 'Carrera 95 C#128D-24',
            correo: 'moredinatm@gmail.com',
            privacy: [{
                allowAppnotifications: true,
                emailPromos:false,
                genderIdentity: 'Female',
            }],
            security: [{
                twostepverfications: true
            }],

        });
})

module.exports = router;