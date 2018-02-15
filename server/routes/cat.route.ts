import { createRouter, HttpMethods } from 'express-router-helper';

import { getAllCats } from '../api/cat.api';

export default createRouter({
  prefix: 'cats',
  routes: [
    {
      path: '',
      method: HttpMethods.GET,
      handler: getAllCats
    }
  ]
});
