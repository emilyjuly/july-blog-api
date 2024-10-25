import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ required: false })
  caption: string;

  @ApiProperty({ required: true })
  photoId: number;

  @ApiProperty({ required: true })
  userId: number;

  @ApiProperty({ required: true })
  username: string;
}
