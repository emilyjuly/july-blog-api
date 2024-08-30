import { ApiProperty } from '@nestjs/swagger';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';
import { CreateLikeDto } from 'src/likes/dto/create-like.dto';
import { CreatePhotoDto } from 'src/photos/dto/create-photo.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreatePostDto {
  @ApiProperty({ required: false })
  caption: string;

  @ApiProperty()
  photo: CreatePhotoDto;

  @ApiProperty()
  photoId: number;

  @ApiProperty()
  comments: CreateCommentDto[];

  @ApiProperty()
  likes: CreateLikeDto[];

  @ApiProperty()
  user: CreateUserDto;

  @ApiProperty()
  userId: number;
}
