import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostsDto } from './posts.dto';
import { Posts, PostsDocument } from './posts.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel('posts') private postModel: Model<PostsDocument>) {}

  async create(postsDto: PostsDto): Promise<Posts> {
    const createPost = new this.postModel(postsDto);
    return createPost.save();
  }

  async findAll(): Promise<Posts[]> {
    return this.postModel.find().exec();
  }
}
