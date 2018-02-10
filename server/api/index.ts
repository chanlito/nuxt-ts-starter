import { Router } from 'express';

import { getAllCats } from './cats.api';

export const api = Router();

api.get('/cats', getAllCats)
