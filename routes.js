let formulario = require('./formulario');



module.exports = {

    'get': {
        'home': {

            'html': '<h1>Home</h1>'
        },
        'contact': {

            'html': formulario
        },

    },

    'post': {
        'contact': {

            'html': require('./formulario')
        },
    }

}