// backend/contribuyentes/contribuyentes.model.js
const mongoose = require('mongoose');

const ContribuyenteSchema = new mongoose.Schema({
    razonSocial: String,
    cuit: String,
    tipoPersona: String,
    email: String,
    direccion: String,
    telefono: String,
    impuestosAsociados: [String]
});

module.exports = mongoose.model('Contribuyente', ContribuyenteSchema);

