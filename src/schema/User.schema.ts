import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: false })
  name?: string; // ? is for optional so ts knows its optional

  @Prop({ required: false })
  avatarUrl?: string;
}

SchemaFactory.createForClass(User);
export const UserSchema = SchemaFactory.createForClass(User);
