// backend/contribuyentes/contribuyentes.service.js
const contribuyentesRepository = require('./contribuyentes.repository');

class ContribuyentesService {
    async crearContribuyente(data) {
        return await contribuyentesRepository.crear(data);
    }
    
    async listarContribuyentes() {
        return await contribuyentesRepository.obtenerTodos();
    }
}

module.exports = new ContribuyentesService();
