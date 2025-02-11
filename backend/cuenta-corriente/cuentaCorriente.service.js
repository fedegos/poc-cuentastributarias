// backend/cuenta-corriente/cuentaCorriente.service.js
const cuentaCorrienteRepository = require('./cuentaCorriente.repository');

class CuentaCorrienteService {
    async registrarMovimiento(data) {
        return await cuentaCorrienteRepository.registrarMovimiento(data);
    }
    
    async listarMovimientos(cuentaCorrienteId) {
        return await cuentaCorrienteRepository.obtenerMovimientos(cuentaCorrienteId);
    }
    
    async consultarSaldo(cuentaCorrienteId) {
        return await cuentaCorrienteRepository.obtenerSaldo(cuentaCorrienteId);
    }
}

module.exports = new CuentaCorrienteService();