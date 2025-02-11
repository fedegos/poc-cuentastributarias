// backend/contribuyentes/contribuyentes.controller.js
const express = require('express');
const router = express.Router();
const contribuyentesService = require('./contribuyentes.service');

router.post('/', async (req, res) => {
    const contribuyente = await contribuyentesService.crearContribuyente(req.body);
    res.json(contribuyente);
});

router.get('/', async (req, res) => {
    const contribuyentes = await contribuyentesService.listarContribuyentes();
    res.json(contribuyentes);
});

module.exports = router;
