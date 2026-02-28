import { Router } from 'express';

const router = Router();

// Ruta principal que renderiza una vista
router.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Home',
    mensaje: 'Renderizando vistas con Handlebars 🚀',
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    titulo: 'About',
    mensaje: 'cosas random sobre nuestro sitio',
    mensaje1: 'sos re ortiva gil',
  });
});

export default router;