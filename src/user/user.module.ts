import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/nest/controllers/User.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [UserController],
  exports: [],
})
export class UserModule {}
