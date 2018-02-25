import { Builder, Nuxt } from 'nuxt';

export class NuxtFactory {
  static async create(nuxtConfig: any) {
    const nuxt = new Nuxt(nuxtConfig);
    if (nuxtConfig.dev) await new Builder(nuxt).build();
    return nuxt;
  }
}
