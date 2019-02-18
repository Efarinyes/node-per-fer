// const argv = require('yargs').argv;

const argv = require('./configs/yargs').argv;

const perFer = require('./tasques/tasques');
const colors = require('colors');

// console.log(argv);

let ordre = argv._[0];

switch (ordre) {
    case 'crear':
        let tasca = perFer.crear(argv.descripcio);
        console.log(tasca);
        break;
    case 'llistar':
        let llistat = perFer.getLlistat();

        for (let tasca of llistat) {
            console.log('======= Per Fer ======='.green);
            console.log(tasca.descripcio.red);
            console.log('Estat', tasca.completat);
            console.log('======================='.green);
        }
        break;
    case 'actualitzar':

        let actualitzat = perFer.actualitzar(argv.descripcio, argv.completat);

        console.log(actualitzat);

        break;
    case 'borrar':
        let borrat = perFer.borrar(argv.descripcio);
        console.log(borrat);
        break;
    default:
        console.log('Ordre no reconeguda');
}