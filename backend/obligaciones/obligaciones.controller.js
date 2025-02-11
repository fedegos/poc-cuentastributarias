// backend/obligaciones/obligaciones.controller.js
const express = require('express');
const router = express.Router();
const obligacionService = require('./obligaciones.service');

router.post('/', async (req, res) => {
    const obligacion = await obligacionService.registrarObligacion(req.body);
    res.json(obligacion);
});

router.get('/:contribuyenteId', async (req, res) => {
    const obligaciones = await obligacionService.listarObligaciones(req.params.contribuyenteId);
    res.json(obligaciones);
});

module.exports = router;