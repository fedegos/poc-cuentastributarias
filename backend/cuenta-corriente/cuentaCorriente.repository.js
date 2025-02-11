// backend/cuenta-corriente/cuentaCorriente.repository.js
const { CuentaCorriente, Movimiento } = require('./cuentaCorriente.model');

class CuentaCorrienteRepository {
    async registrarMovimiento(movimiento) {
        const cuenta = await CuentaCorriente.findById(movimiento.cuentaCorriente);
        if (!cuenta) throw new Error('Cuenta Corriente no encontrada');

        const nuevoMovimiento = await Movimiento.create(movimiento);
        cuenta.movimientos.push(nuevoMovimiento._id);
        cuenta.saldo += movimiento.tipo === 'Crédito' ? movimiento.monto : -movimiento.monto;
        await cuenta.save();

        return nuevoMovimiento;
    }
    
    async obtenerMovimientos(cuentaCorrienteId) {
        return await Movimiento.find({ cuentaCorriente: cuentaCorrienteId });
    }
    
    async obtenerSaldo(cuentaCorrienteId) {
        const cuenta = await CuentaCorriente.findById(cuentaCorrienteId);
        if (!cuenta) throw new Error('Cuenta Corriente no encontrada');
        return cuenta.saldo;
    }
}

module.exports = new CuentaCorrienteRepository();
