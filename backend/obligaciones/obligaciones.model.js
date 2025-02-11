// backend/obligaciones/obligaciones.model.js
const mongoose = require('mongoose');

const ObligacionSchema = new mongoose.Schema({
    impuesto: String,
    contribuyenteId: mongoose.Schema.Types.ObjectId,
    claveObjeto: String,
    fechaCreacion: Date,
    monto: Number,
    estado: { type: String, enum: ['pendiente', 'pagado', 'vencido'], default: 'pendiente' }
});

module.exports = mongoose.model('Obligacion', ObligacionSchema);

