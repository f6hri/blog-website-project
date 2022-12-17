import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Posts } from './posts.schema';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): Promise<Posts[]> {
    return this.postsService.findAll();
  }

  @Post()
  create(@Req() req: Request): Promise<Posts> {
    return this.postsService.create(req.body);
  }
}
