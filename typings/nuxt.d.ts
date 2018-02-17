declare module 'nuxt' {
  import { AxiosInstance, AxiosRequestConfig } from 'axios';
  import { Store } from 'vuex';
  import { Route } from 'vue-router';

  export class Builder {
    constructor(nuxt: Nuxt);
    build(): void;
  }

  export class Nuxt {
    constructor(config?: NuxtConfig);
    render(): void;
  }

  export interface NuxtAxiosInstance {
    $delete(url: string, config?: AxiosRequestConfig): Promise<any>;
    $get(url: string, config?: AxiosRequestConfig): Promise<any>;
    $post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
    $put(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>;
  }

  export interface NuxtApp {
    $axios: AxiosInstance & NuxtAxiosInstance;
  }

  export interface NuxtConfig {
    dev: boolean;
    [key: string]: any;
  }

  export interface NuxtContext<S = any> {
    app: NuxtApp;
    isClient: boolean;
    isServer: boolean;
    isStatic: boolean;
    isDev: boolean;
    isHMR: boolean;
    route: Route;
    req: any;
    res: any;
    store: Store<S>;
    env: any;
    params: any;
    query: any;
    redirect(path: string): void;
    error(params: { statusCode: number; message: string }): void;
    nuxtState: any;
    beforeNuxtRender(fn: Function): any;
  }
}
