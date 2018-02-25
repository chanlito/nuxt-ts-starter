import 'dotenv/config';

import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { resolve } from 'path';

import { AppModule } from './app/app.module';
import { NuxtFactory } from './util';

(async () => {
  const { NODE_ENV = 'development', PORT = '1337' } = process.env;

  /**
   * Create a Nest application.
   */
  const app: INestApplication = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true
  });

  /**
   * Create a Nuxt application.
   */
  const nuxt = await NuxtFactory.create({
    ...require(resolve('.', 'nuxt.config.js')),
    dev: NODE_ENV !== 'production'
  });

  /**
   * Set a global prefix for rest apis.
   */
  app.setGlobalPrefix('api');

  /**
   * Apply some express middlewares
   */
  app.use(compression());

  /**
   * Start Nest application.
   */
  await app.listen(PORT);

  /**
   * Render Nuxt application.
   */
  app.use(nuxt.render);
})().catch(e => {
  console.error(e);
  process.exit(1);
});
