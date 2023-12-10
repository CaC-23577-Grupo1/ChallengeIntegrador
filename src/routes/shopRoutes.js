// Esta capa contendra las respuestas a las rutas aqui definidas

const express = require('express');     // Requerimos express ya que necesitamos usar sus metodos
const router = express.Router();        // El metodo que necesitamos es "Router"

const shopControllers = require('../controllers/shopControllers');      // Importamos el Objeto con las funciones de la capa Controladores

/* Definimos las rutas de "SHOP" */
router.get('/shop', shopControllers.shop);
router.get('/shop/item/:id', shopControllers.item);
router.post('/shop/item/:id/add', shopControllers.itemAdd);
router.get('/shop/cart', shopControllers.cart);
router.post('/shop/cart', shopControllers.payment);

module.exports = router;    // Exportamos las rutas aqui definidas