/* CONTROLADOR de MAIN */
// Esta capa contendra la logica que dara respuesta a la capa de rutas

// Objeto que contiene en cada propiedad una funcion
const mainControllers = {
    indexpage: (req, res) => res.send('Ruta para la vista de la Pagina de Inicio (Deberia ser la misma del Home).'),
    home: (req, res) => res.send('Ruta para la vista Home.'),
    contact:(req, res) => res.send('Ruta para la vista Contacto.'),
    about:(req, res) => res.send('Ruta para la vista Sobre Nosotros.'),
    faqs:(req, res) => res.send('Ruta para la vista FAQs.'),
  };

module.exports = mainControllers;     // exportamos el objeto con sus propiedades