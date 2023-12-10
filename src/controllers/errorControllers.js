/* CONTROLADOR de ERRORES */
// Esta capa contendra la logica que dara respuesta a la capa de rutas

// Objeto que contiene en cada propiedad una funcion
const errorControllers = {
    error404: (req, res) => res.status(404).send('Error 404: La ruta especificada No Existe.'),
  };

module.exports = errorControllers;    // exportamos el objeto con sus propiedades