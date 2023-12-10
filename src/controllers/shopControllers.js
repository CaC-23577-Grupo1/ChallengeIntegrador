/* CONTROLADOR de SHOP */
// Esta capa contendra la logica que dara respuesta a la capa de rutas

// Objeto que contiene en cada propiedad una funcion
const shopControllers = {
    shop: (req, res ) => res.send('Ruta para la vista Shop'),
    item: (req, res ) => res.send(`Ruta para la vista de un Item dependiendo el ID especificado.<br><br>En esta ruta han indicado el ID: ${req.params.id}`),
    itemAdd: (req, res ) => res.send(`Ruta para agregar un Item al Carrito dependiendo el ID especificado.<br><br>En esta ruta han indicado el ID: ${req.params.id}`),
    cart: (req, res ) => res.send('Ruta para la vista Carrito'),
    payment: (req, res ) => res.send('Ruta para ir a la parte de pagos del Carrito'),
  };

module.exports = shopControllers;     // exportamos el objeto con sus propiedades