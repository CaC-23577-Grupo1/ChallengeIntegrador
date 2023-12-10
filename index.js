const express = require('express');     // Importamos el modulo de Express
const app = express();                  // Ejecutamos Express

const path = require('path');           // Metodo Path para resolver rutas

const methodOverride = require('method-override');      // Herramienta "method-override" para sobreescribir los POST

require('dotenv').config();

/* Requerimos nuestros modulos de rutas */
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const errorRoutes = require('./src/routes/errorRoutes');

const PORT = process.env.PORT || process.env.AUXPORT;       // Puerto que estara escuchando el servidor

/* Template Engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

/* Middlewares de Configuracion */
app.use(express.urlencoded());              // Parsea los datos del Body en el POST
app.use(express.json());                    // Parsea los datos del Body en el POST
app.use(methodOverride('_method'));         // Sobreescribe los POST cuando usamos "_method"

app.use(express.static('public'));          // Carpeta de Archivos Estaticos

/* Middlewares de Rutas  */
app.use('/', mainRoutes);
app.use('/', shopRoutes);
app.use('/', adminRoutes);
app.use('/', authRoutes);

/* Rutas de Error */
app.use(errorRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:${PORT}`));  // Ejecutamos el servidor y mostramos un mensaje por consola