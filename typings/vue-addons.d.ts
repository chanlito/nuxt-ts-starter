import { NuxtContext } from 'nuxt';
import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {}
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData?: (ctx: NuxtContext) => Promise<any>;
    fetch?: (ctx: NuxtContext) => Promise<any>;
    layout?: string;
    middleware?: string | string[];
  }
}
