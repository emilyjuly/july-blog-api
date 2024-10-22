import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhotosService {
  constructor(private prisma: PrismaService) {}

  create(file: Express.Multer.File) {
    const { originalname, mimetype, size, filename, path } = file;

    return this.prisma.photo.create({
      data: {
        filename: originalname,
        mimetype,
        size,
      },
    });
  }

  findAll() {
    return this.prisma.photo.findMany();
  }

  findOne(id: number) {
    return this.prisma.photo.findUnique({ where: { id } });
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return this.prisma.photo.update({
      where: { id },
      data: updatePhotoDto,
    });
  }

  remove(id: number) {
    return this.prisma.photo.delete({ where: { id } });
  }
}
