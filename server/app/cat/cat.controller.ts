import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatController {
  private readonly cats = [
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
  ];

  @Get()
  async getCatList() {
    return this.cats;
  }
}
