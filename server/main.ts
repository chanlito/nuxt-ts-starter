import 'dotenv/config';

import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { resolve } from 'path';

import { AppModule } from './app/app.module';
import { NuxtFactory } from './util';

const { NODE_ENV = 'development', PORT = '1337' } = process.env;
const nuxtConfig = require(resolve('.', 'nuxt.config.js'));

(async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true
  });
  const nuxt = await NuxtFactory.create({
    ...nuxtConfig,
    dev: NODE_ENV !== 'production'
  });

  app.use(compression());
  app.setGlobalPrefix('/api');

  await app.listen(PORT).then(
    _ => app.use(nuxt.render),
    e => {
      console.error(e);
      process.exit(1);
    }
  );
})();

