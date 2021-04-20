const Services = require('./Services')
const database = require('../models')

class PessoasServices extends Services {
    constructor() {
        super('Pessoas')
    }
    //métodos específicos
    async pegaRegistrosAtivos(where = {}) {
        return database[this.nomeDoModelo].findAll({
            where: {
                ...where
            }
        })
    }
    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo].scope('todos').findAll({
            where: {
                ...where
            }
        })
    }
}

module.exports = PessoasServices