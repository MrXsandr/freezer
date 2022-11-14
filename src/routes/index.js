import { Router } from 'express';
import { Category, Product } from '../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const cats = await Category.findAll();
  const prods = await Product.findAll();
  res.render('Layout', { cats, prods });
});

export default router;
