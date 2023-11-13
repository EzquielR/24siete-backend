import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoUrl } from './constants/database.constants';

@Module({
  imports: [MongooseModule.forRoot(MongoUrl)],
  exports: [MongooseModule],
})
export class DatabaseModule {}
