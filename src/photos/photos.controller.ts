import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PhotoEntity } from './entities/photo.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostsService } from 'src/posts/posts.service';
import { multerConfig } from 'multer.config';

@ApiBearerAuth()
@ApiTags('Photos')
@Controller('photos')
export class PhotosController {
  constructor(
    private readonly photosService: PhotosService,
    private readonly postsService: PostsService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  @ApiCreatedResponse({ type: PhotoEntity })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('userId') userId: number,
    @Body('username') username: string,
    @Body('caption') caption?: string,
  ) {
    const photo = await this.photosService.create(file);
    const post = await this.postsService.create({
      photoId: photo.id,
      userId: +userId,
      username: username,
      caption,
    });

    return { photo, post };
  }

  @Get()
  @ApiOkResponse({ type: PhotoEntity, isArray: true })
  findAll() {
    return this.photosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PhotoEntity })
  findOne(@Param('id') id: string) {
    return this.photosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PhotoEntity })
  update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
    return this.photosService.update(+id, updatePhotoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PhotoEntity })
  async remove(@Param('id') id: string) {
    await this.postsService.removeByPhotoId(+id);
    return this.photosService.remove(+id);
  }
}
