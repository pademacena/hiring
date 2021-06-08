import express from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import StockController from './controller/StocksController';
import ConnectController from './controller/ConnectController';

const routes = express.Router();

routes.get('/', ConnectController.index);

routes.get(
  '/:stock_name/quote',
  celebrate({
    [Segments.PARAMS]: {
      stock_name: Joi.string().required(),
    },
  }),
  StockController.show,
);

routes.get(
  '/:stock_name/history',
  celebrate({
    [Segments.PARAMS]: {
      stock_name: Joi.string().required(),
    },
    [Segments.QUERY]: {
      from: Joi.string().required(),
      to: Joi.string().required(),
    },
  }),
  StockController.showHistory,
);

routes.get(
  '/:stock_name/gains',
  celebrate({
    [Segments.PARAMS]: {
      stock_name: Joi.string().required(),
    },
    [Segments.QUERY]: {
      purchasedAmount: Joi.number().required(),
      purchasedAt: Joi.string().required(),
    },
  }),
  StockController.gains,
);

routes.post(
  '/:stock_name/compare',
  celebrate({
    [Segments.PARAMS]: {
      stock_name: Joi.string().required(),
    },
    [Segments.BODY]: {
      stocks: Joi.array().required(),
    },
  }),
  StockController.compare,
);

export default routes;