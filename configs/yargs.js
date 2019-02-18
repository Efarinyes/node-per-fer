const descripcio = {
    demand: true,
    alias: 'd',
    desc: 'Detall de la tasca a fer'
};
const completat = {
    default: true,
    alias: 'c',
    desc: 'Marcador per saber si esta o no feta una tasca'
};

const argv = require('yargs')

.command('crear', 'Genera una tasca a fer', {
        descripcio
    })
    .command('actualitzar', 'Actualitza una feina', {
        descripcio,
        completat
    })
    .command('borrar', 'Borra una tasca per fer de la BBDD', {
        descripcio
    })
    .help('help')
    .argv;


module.exports = {
    argv
};