/* CONTROLADOR de ADMIN */
// Esta capa contendra la logica que dara respuesta a la capa de rutas

// Objeto que contiene en cada propiedad una funcion
const adminControllers = {
    admin: (req, res) => res.send('Ruta para la vista del Administrador de Items.'),
    create:(req, res) => res.send('Ruta para la vista Crear un nuevo Item.'),
    createAdd:(req, res) => res.send('Ruta para guardar el Item Creado.'),
    edit:(req, res) => res.send(`Ruta para la vista Editar un item dependiendo el ID especificado.<br><br>En esta ruta han indicado el ID: ${req.params.id}`),
    editSave:(req, res) => res.send(`Ruta para guardar los datos del Item editado, tambien dependiendo el ID.<br><br>En esta ruta han indicado el ID: ${req.params.id}`),
    delete:(req, res) => res.send(`Ruta para eliminar un Item. dependiendo el ID especificado.<br><br>En esta ruta han indicado el ID: ${req.params.id}`),
  };

module.exports = adminControllers;  // exportamos el objeto con sus propiedades