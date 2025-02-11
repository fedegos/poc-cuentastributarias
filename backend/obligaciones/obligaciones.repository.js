// backend/obligaciones/obligaciones.repository.js
const Obligacion = require('./obligaciones.model');

class ObligacionRepository {
    async crearObligacion(obligacion) {
        return await Obligacion.create(obligacion);
    }
    
    async obtenerObligacionesPorContribuyente(contribuyenteId) {
        return await Obligacion.find({ contribuyenteId });
    }
}

module.exports = new ObligacionRepository();