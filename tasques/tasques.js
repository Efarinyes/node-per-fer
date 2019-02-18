const fs = require('fs');

let tasquesPerFer = [];

const desarDades = () => {
    let data = JSON.stringify(tasquesPerFer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Tasca no grabada', err);
    });
};

const carregarDades = () => {

    try {
        tasquesPerFer = require('../db/data.json');
    } catch (error) {
        tasquesPerFer = [];
    }

}
const crear = (descripcio) => {

    carregarDades();
    let perFer = {
        descripcio,
        completat: false
    };
    tasquesPerFer.push(perFer);
    desarDades();
    return perFer;
}

const getLlistat = () => {
    carregarDades();
    return tasquesPerFer;
}
const actualitzar = (descripcio, completat = true) => {
    carregarDades();
    let index = tasquesPerFer.findIndex(feina => feina.descripcio === descripcio);

    if (index >= 0) {
        tasquesPerFer[index].completat = completat;
        desarDades();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcio) => {
    carregarDades();
    let nouLlistat = tasquesPerFer.filter(feina => {
        return feina.descripcio !== descripcio;
    });

    if (tasquesPerFer.length === nouLlistat.length) {
        return false;
    } else {
        tasquesPerFer = nouLlistat;
        desarDades();
        return true;
    }
}

module.exports = {
    crear,
    getLlistat,
    actualitzar,
    borrar
};