import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdmUserDocument = HydratedDocument<AdmUser>;

@Schema()
export class AdmUser {
  @Prop({ required: true })
  userName: string;

  @Prop()
  name: string;

  @Prop()
  position: string;

  @Prop()
  rolId: number;

  @Prop({ required: true })
  password: string;
}

export const AdmUserSchema = SchemaFactory.createForClass(AdmUser);