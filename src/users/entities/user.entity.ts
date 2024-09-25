import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Role } from '@prisma/client';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  posts?: CreatePostDto[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
