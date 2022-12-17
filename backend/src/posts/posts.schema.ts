import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type PostsDocument = HydratedDocument<Posts>;

@Schema()
export class Posts {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  heroImageUrl: string;

  @Prop([String])
  content: string[];

  @Prop({ type: Date, default: new Date() })
  createdAt: Date;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
