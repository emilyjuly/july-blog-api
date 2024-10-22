import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostsController } from 'src/posts/posts.controller';
import { PostsModule } from 'src/posts/posts.module';
import { PostsService } from 'src/posts/posts.service';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService, PostsService],
  imports: [PrismaModule],
})
export class PhotosModule {}
