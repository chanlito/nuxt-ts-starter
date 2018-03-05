import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  imports: [UsersModule]
})
export class ApplicationModule {}
