import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PostEntity } from './entities/post.entity';

@ApiBearerAuth()
@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiCreatedResponse({ type: PostEntity })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOkResponse({ type: PostEntity, isArray: true })
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':userId')
  @ApiOkResponse({ type: [PostEntity] })
  findOne(@Param('userId') userId: string) {
    return this.postsService.findByUserId(+userId);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PostEntity })
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PostEntity })
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
