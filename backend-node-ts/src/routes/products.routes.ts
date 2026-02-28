
import { Router } from 'express';
import {
  showDashboard,
  createProduct,
  getAllProducts,
} from '../controllers/products.controller';

const router = Router();


router.get('/', getAllProducts);
router.get('/dashboard', showDashboard);
router.post('/create', createProduct);

export default router;