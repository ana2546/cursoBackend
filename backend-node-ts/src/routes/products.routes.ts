
import { Router } from 'express';
import {
  showDashboard,
  createProduct,
  getAllProducts,
  deleteProduct ,
  getProduct
} from '../controllers/products.controller';

const router = Router();


router.get('/', getAllProducts);
router.get('/dashboard', showDashboard);
router.post('/create', createProduct);
router.delete('/:id', deleteProduct);
router.get('/:id', getProduct);

export default router;