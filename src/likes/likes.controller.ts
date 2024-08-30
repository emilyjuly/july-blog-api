import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LikeEntity } from './entities/like.entity';

@ApiBearerAuth()
@ApiTags('Likes')
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  @ApiCreatedResponse({ type: LikeEntity })
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(createLikeDto);
  }

  @Get()
  @ApiOkResponse({ type: LikeEntity, isArray: true })
  findAll() {
    return this.likesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: LikeEntity })
  findOne(@Param('id') id: string) {
    return this.likesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: LikeEntity })
  update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likesService.update(+id, updateLikeDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: LikeEntity })
  remove(@Param('id') id: string) {
    return this.likesService.remove(+id);
  }
}
