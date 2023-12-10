/* CONTROLADOR de AUTH */
// Esta capa contendra la logica que dara respuesta a la capa de rutas

// Objeto que contiene en cada propiedad una funcion
const authControllers = {
    loginView: (req, res) => res.send('Ruta para la vista Iniciar Sesion.'),
    loginSend:(req, res) => res.send('Ruta para la accion Iniciar Sesion.'),
    registerView:(req, res) => res.send('Ruta para la vista Registrarse.'),
    registerSend:(req, res) => res.send('Ruta para la accion Registrarse'),
    logout:(req, res) => res.send('Ruta para la accion Cerrar Sesion'),
  };

module.exports = authControllers;   // exportamos el objeto con sus propiedades