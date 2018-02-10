import 'dotenv/config';

import * as express from 'express';
import { Builder, Nuxt } from 'nuxt';
import { resolve } from 'path';

import { api } from './api';

const { NODE_ENV = 'development', PORT = '1337' } = process.env;
const dev = NODE_ENV !== 'production';

const app = express();
const nuxt = new Nuxt({ ...require(resolve('.', 'nuxt.config.js')), dev });

(async function main() {
  if (dev) await new Builder(nuxt).build();
  app.use('/api', api);
  app.use(nuxt.render);
  app.listen(PORT, () => console.log(`> Listening on port ${PORT}`));
})();
