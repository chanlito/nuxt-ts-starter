require('dotenv/config');

const { resolve } = require('path');

module.exports = {
  /**
   * Specify application header defaults
   */
  head: {
    title: 'Nuxt TS Starter',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'We love using Nuxt & Typescript 💚💙'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/vuetify/dist/vuetify.min.css'
      }
      // {
      //   rel: 'stylesheet',
      //   href: 'https://use.fontawesome.com/releases/v5.0.4/css/all.css'
      // }
    ],
    script: []
  },
  /**
   * Customize application loading bar
   */
  loading: {
    color: '#ff4081'
  },
  /**
   * Specify build directory
   */
  buildDir: 'build/client',
  /**
   * Specify nuxt source directory
   */
  srcDir: 'client',
  /**
   * Configure & extend Webpack build
   */
  build: {
    // analyze: true,
    maxChunkSize: 300000,
    vendor: [
      'nuxt-class-component',
      'vee-validate',
      'vue-class-component',
      'vue-property-decorator',
      'vuex-class',
      'vuetify'
    ]
  },
  /**
   * Specify additional nuxt plugins
   */
  plugins: [],
  /**
   * Specify additional nuxt modules
   */
  modules: [
    ['@nuxtjs/dotenv', { path: resolve('.') }],
    ['@nuxtjs/axios'],
    ['@nuxtjs/proxy'],
    [
      'nuxtjs-extensions/typescript',
      {
        tsconfig: resolve(__dirname, 'client', 'tsconfig.json'),
        tslint: resolve(__dirname, 'tslint.json')
      }
    ],
    ['nuxtjs-extensions/vee-validate'],
    [
      'nuxtjs-extensions/vuetify',
      {
        css: false,
        theme: {
          primary: '#3f51b5',
          secondary: '#757de8',
          accent: '#ff4081',
          error: '#F44336',
          warning: '#ff9800',
          info: '#2196F3',
          success: '#4CAF50'
        }
      }
    ]
  ],
  /**
   * Specify configuration for @nuxtjs/axios module
   */
  axios: {
    // proxy: true
  }
};
