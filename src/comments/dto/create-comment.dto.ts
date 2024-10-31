import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentDto {
  @ApiProperty({ required: true })
  content: string;

  @ApiProperty({ required: true })
  postId: number;

  @ApiProperty({ required: true })
  userId: number;

  @ApiProperty({ required: true })
  username: string;
}
