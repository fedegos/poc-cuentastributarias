// backend/contribuyentes/contribuyentes.repository.js
const Contribuyente = require('./contribuyentes.model');

class ContribuyentesRepository {
    async crear(contribuyente) {
        return await Contribuyente.create(contribuyente);
    }
    
    async obtenerTodos() {
        return await Contribuyente.find();
    }
}

module.exports = new ContribuyentesRepository();
