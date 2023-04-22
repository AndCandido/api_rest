import { Router } from 'express';

import { index } from '../controllers/homeController';

const routes = new Router();

routes.get('/', index);

export default routes;
