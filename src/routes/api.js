import { Router } from 'express';
import { Category, Product } from '../../db/models';
// import { deleteProtect } from '../middlewares';

const router = Router();

router.delete('/cats/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Product.update({ cat_id: null }, { where: { cat_id: id } });
  await Category.destroy(
    { where: { id } },
  );
  res.sendStatus(200);
});

router.delete('/prods/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Product.destroy(
    { where: { id } },
  );
  res.sendStatus(200);
});

router.post('/cats/newcat', async (req, res) => {
  const result = await Category.create({ ...req.body });
  res.json(result);
});

router.post('/prods/newprod', async (req, res) => {
  const result = await Product.create({ ...req.body });
  res.json(result);
});

router.patch('/cats/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { title: newName } = req.body;
  await Category.update(
    req.body,
    { where: { id } },
  );
  const result = await Category.findByPk(id);
  res.json(result);
});

router.patch('/prods/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { title: newName } = req.body;
  await Product.update(
    req.body,
    { where: { id } },
  );
  const result = await Product.findByPk(id);
  res.json(result);
});

router.get('/view/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Product.findAll({ where: { cat_id: id } });
  res.json(result);
});

export default router;
