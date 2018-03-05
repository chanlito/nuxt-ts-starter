import { Builder, Nuxt, NuxtConfig } from 'nuxt';

export class NuxtFactory {
  static async create(nuxtConfig: NuxtConfig) {
    const nuxt = new Nuxt(nuxtConfig);
    if (nuxtConfig.dev) await new Builder(nuxt).build();
    return nuxt;
  }
}
