// Importamos Express y los tipos Request y Response desde express
// Esto nos permite tipar correctamente los parámetros de las rutas
import express, { Request, Response } from 'express';
import path from 'path';
// Creamos la instancia principal de la aplicación Express
const app = express();

// Definimos el puerto donde va a escuchar el servidor
const PORT = 3000;

// Middleware que permite leer JSON en el body de las requests
app.use(express.json());

// Middleware para servir archivos estáticos
// __dirname representa la carpeta actual compilada 
app.use(express.static(path.join(__dirname, '..', 'public')));

// Endpoint GET raíz
// URL: http://localhost:3000/
app.get('/api', (req: Request, res: Response) => {
  // Respondemos con un objeto JSON simple
    res.json( { message: 'Servidor funcionando 🚀' } );
});

// Endpoint GET /saludo
// URL: http://localhost:3000/saludo
// Endpoint de prueba API
app.get('/api/saludo', (req: Request, res: Response) => {
  res.json({ mensaje: 'Hola desde la API 🚀' });
});


app.get('/api/pong', (req: Request, res: Response) => {
  res.json({ pong: true });
});

interface Usuario {
  nombre: string;
  edad: number;
}

const usuario: Usuario = {
  nombre: "Ana",
  edad: 30
};

app.get('/api/usuario', (req: Request, res: Response<Usuario>) => {
  res.json(usuario);
});

// Iniciamos el servidor HTTP
// Si todo está correcto, veremos el mensaje en consola
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});



// un array de usuarios
const usuarios: Usuario[] = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Juan", edad: 25 },
  { nombre: "Lucía", edad: 28 }
];

app.get('/api/usuarios', (req: Request, res: Response<Usuario[]>) => {
  res.json(usuarios);
});