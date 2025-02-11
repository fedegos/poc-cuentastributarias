// backend/obligaciones/obligaciones.service.js
const obligacionRepository = require('./obligaciones.repository');

class ObligacionService {
    async registrarObligacion(data) {
        return await obligacionRepository.crearObligacion(data);
    }
    
    async listarObligaciones(contribuyenteId) {
        return await obligacionRepository.obtenerObligacionesPorContribuyente(contribuyenteId);
    }
}

module.exports = new ObligacionService();