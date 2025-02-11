// backend/cuenta-corriente/cuentaCorriente.controller.js
const express = require('express');
const router = express.Router();
const cuentaCorrienteService = require('./cuentaCorriente.service');

router.post('/movimiento', async (req, res) => {
    try {
        const movimiento = await cuentaCorrienteService.registrarMovimiento(req.body);
        res.json(movimiento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:cuentaCorrienteId/movimientos', async (req, res) => {
    try {
        const movimientos = await cuentaCorrienteService.listarMovimientos(req.params.cuentaCorrienteId);
        res.json(movimientos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:cuentaCorrienteId/saldo', async (req, res) => {
    try {
        const saldo = await cuentaCorrienteService.consultarSaldo(req.params.cuentaCorrienteId);
        res.json({ saldo });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;