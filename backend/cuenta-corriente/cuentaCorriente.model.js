// backend/cuenta-corriente/cuentaCorriente.model.js
const mongoose = require('mongoose');

const MovimientoSchema = new mongoose.Schema({
    cuentaCorriente: { type: mongoose.Schema.Types.ObjectId, ref: 'CuentaCorriente' },
    tipo: { type: String, enum: ['Débito', 'Crédito'], required: true },
    monto: { type: Number, required: true },
    fechaHora: { type: Date, default: Date.now },
    categoria: String,
    observaciones: String,
    origen: String
});

const CuentaCorrienteSchema = new mongoose.Schema({
    contribuyenteId: { type: String, required: true },
    saldo: { type: Number, default: 0 },
    movimientos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movimiento' }]
});

const CuentaCorriente = mongoose.model('CuentaCorriente', CuentaCorrienteSchema);
const Movimiento = mongoose.model('Movimiento', MovimientoSchema);

module.exports = { CuentaCorriente, Movimiento };