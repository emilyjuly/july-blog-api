import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({ data: createPostDto });
  }

  findAll() {
    return this.prisma.post.findMany({
      include: {
        Photo: true,
        Comments: true,
        Likes: true,
      },
    });
  }

  findByUserId(userId: number) {
    return this.prisma.post.findMany({
      where: { userId },
      include: {
        Photo: true,
        Comments: true,
        Likes: true,
      },
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  removeByPhotoId(photoId: number) {
    return this.prisma.post.delete({ where: { photoId } });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
