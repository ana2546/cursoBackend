// Importamos Express y los tipos Request y Response desde express
// Esto nos permite tipar correctamente los parámetros de las rutas
import express, { Request, Response } from 'express';
import path from 'path';
import 'dotenv/config';




// Creamos la instancia principal de la aplicación Express
const app = express();

// Definimos el puerto donde va a escuchar el servidor
const PORT = process.env.PORT || 3000;

// Middleware que permite leer JSON en el body de las requests
app.use(express.json());


// Configuración del motor de plantillas Handlebars


// Middleware para servir archivos estáticos
// __dirname representa la carpeta actual compilada 
app.use(express.static(path.join(__dirname, '..', 'public')));



// Endpoint GET /saludo
// URL: http://localhost:3000/saludo
// Endpoint de prueba API
app.get('/api/saludo', (req: Request, res: Response) => {
  res.json({ mensaje: 'Hola desde la API 🚀' });
});




// Iniciamos el servidor HTTP
// Si todo está correcto, veremos el mensaje en consola
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});