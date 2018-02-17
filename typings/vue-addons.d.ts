import { NuxtContext } from 'nuxt';
import { Validator } from 'vee-validate';
import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $validator: Validator;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData?: (ctx: NuxtContext) => Promise<any>;
    fetch?: (ctx: NuxtContext) => Promise<any>;
    layout?: string;
    middleware?: string | string[];
  }
}
