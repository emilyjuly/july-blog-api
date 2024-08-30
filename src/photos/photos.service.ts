import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhotosService {
  constructor(private prisma: PrismaService) {}

  create(createPhotoDto: CreatePhotoDto) {
    return this.prisma.photo.create({ data: createPhotoDto });
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
