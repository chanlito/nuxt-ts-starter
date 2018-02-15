import { Request, Response, Router } from 'express';

export async function getAllCats(req: Request, res: Response) {
  res.json([
    {
      id: 1,
      name: 'Tom',
      color: 'blue'
    },
    {
      id: 2,
      name: 'Garfield',
      color: 'orange'
    },
    {
      id: 3,
      name: 'Scratchy',
      color: 'blue'
    },
    {
      id: 4,
      name: 'Cheshire',
      color: 'black'
    },
    {
      id: 5,
      name: 'Tobi',
      color: 'white'
    }
  ]);
}
