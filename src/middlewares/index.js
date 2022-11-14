import { Category } from '../../db/models';

export const localsMiddle = (req, res, next) => {
  res.locals.user = req.session.user;
  next();
};
export const localsCat = async (req, res, next) => {
  res.locals.cats = await Category.findAll();
  next();
};
export const deleteProtect = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  return res.sendStatus(401);
};
