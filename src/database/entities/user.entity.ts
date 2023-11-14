import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../constants/role.constanst';

export type UserDocument = HydratedDocument<UserEntity>;

@Schema()
export class UserEntity {
  @Prop({ required: true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Prop()
  cellphone: number;

  @Prop({ type: String, enum: Role, default: Role.UserDefault })
  role: Role;

  @Prop()
  description: string;

  @Prop()
  photo: string;

  @Prop({ default: false })
  tyc: boolean;

  @Prop({ default: true })
  isActive: boolean;
}

export const UserEntitySchema = SchemaFactory.createForClass(UserEntity);
